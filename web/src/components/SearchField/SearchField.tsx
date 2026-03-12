import { type ReactNode, useState } from 'react';

import { Link } from 'react-router-dom';

import iconSearch from '../../assets/icons/icon-search.svg';

import './SearchField.sass';

type SearchResult = {
  id: string;
  type: 'trainer' | 'session';
  title: string;
  subtitle: string;
};

const mockSearchResults: SearchResult[] = [
  { id: '1', type: 'trainer', title: 'John Smith', subtitle: 'Yoga, Pilates' },
  { id: '2', type: 'trainer', title: 'Emma Wilson', subtitle: 'CrossFit, HIIT' },
  { id: '3', type: 'session', title: 'Morning Yoga', subtitle: 'Tomorrow, 8:00 AM' },
  { id: '4', type: 'session', title: 'Evening HIIT', subtitle: 'Today, 6:00 PM' },
];

export const SearchField = (): ReactNode => {
  const [searchQuery, setSearchQuery] = useState('');
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="search-field">
      <img src={iconSearch} alt="" className="search-field__icon" />
      <input
        type="text"
        className="search-field__input"
        placeholder="Search trainers, sessions..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      />
      {isOpen && (
        <div className="search-field__dropdown dropdown-panel">
          <div className="dropdown-panel__content">
            {mockSearchResults.map((result) => (
              <Link key={result.id} to={`/${result.type}s/${result.id}`} className="dropdown-panel__item search-result">
                <span className="search-result__type">{result.type}</span>
                <span className="search-result__title">{result.title}</span>
                <span className="search-result__subtitle">{result.subtitle}</span>
              </Link>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};
