'use client';

import { useRouter } from 'next/navigation';
import { searchOptions } from '@/lib/data';

/**
 * Glass search bar shown in the hero. There is no listings backend yet, so a
 * search simply routes the visitor to the Projects page where the current
 * selection lives. The selected filters travel along as query params for when
 * a real search is wired up later.
 */
export default function SearchBar() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const params = new URLSearchParams();
    data.forEach((value, key) => {
      if (value && !String(value).startsWith('All') && !String(value).startsWith('Any')) {
        params.set(key, String(value));
      }
    });
    const query = params.toString();
    router.push(query ? `/properties?${query}` : '/properties');
  };

  return (
    <form className="search reveal" onSubmit={handleSubmit}>
      <div className="f">
        <label>Area</label>
        <select name="area">
          {searchOptions.areas.map((a) => (
            <option key={a}>{a}</option>
          ))}
        </select>
      </div>
      <div className="f">
        <label>Type</label>
        <select name="type">
          {searchOptions.types.map((t) => (
            <option key={t}>{t}</option>
          ))}
        </select>
      </div>
      <div className="f">
        <label>Beds</label>
        <select name="beds">
          {searchOptions.beds.map((b) => (
            <option key={b}>{b}</option>
          ))}
        </select>
      </div>
      <div className="f">
        <label>Price</label>
        <select name="price">
          {searchOptions.prices.map((p) => (
            <option key={p}>{p}</option>
          ))}
        </select>
      </div>
      <button type="submit" className="btn btn-gold sbtn">Search</button>
    </form>
  );
}
