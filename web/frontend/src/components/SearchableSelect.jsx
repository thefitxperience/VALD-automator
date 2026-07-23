import { useState, useEffect, useRef } from 'react'

// Combobox styled like the VALD program cards. With `allowCustom`, whatever the
// user types is used as the value (so off-roster trainer names are allowed);
// otherwise the value only changes when an option is picked.
export default function SearchableSelect({
  options, value, onChange, onSelect, placeholder, disabled, inputRef, allowCustom = false,
}) {
  const [query, setQuery] = useState(value || '')
  const [open, setOpen] = useState(false)
  const [highlighted, setHighlighted] = useState(0)
  const ref = useRef(null)
  const listRef = useRef(null)

  const filtered = query
    ? options.filter((o) => o.toLowerCase().includes(query.toLowerCase()))
    : options

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) setOpen(false)
    }
    document.addEventListener('mousedown', handleClick)
    return () => document.removeEventListener('mousedown', handleClick)
  }, [])

  useEffect(() => { setQuery(value || '') }, [value])
  useEffect(() => { setHighlighted(0) }, [query])

  function select(opt) {
    onChange(opt)
    setQuery(opt)
    setOpen(false)
    if (onSelect) onSelect(opt)
  }

  function handleKeyDown(e) {
    if (!open || filtered.length === 0) return
    if (e.key === 'ArrowDown') { e.preventDefault(); setHighlighted((h) => Math.min(h + 1, filtered.length - 1)) }
    else if (e.key === 'ArrowUp') { e.preventDefault(); setHighlighted((h) => Math.max(h - 1, 0)) }
    else if (e.key === 'Enter') { e.preventDefault(); select(filtered[highlighted]) }
    else if (e.key === 'Escape') { setOpen(false) }
  }

  useEffect(() => {
    if (!listRef.current) return
    const item = listRef.current.children[highlighted]
    if (item) item.scrollIntoView({ block: 'nearest' })
  }, [highlighted])

  return (
    <div ref={ref} className="relative">
      <input
        ref={inputRef}
        type="text"
        className="w-full bg-gray-800 border border-gray-700 rounded-lg px-3 py-2 text-sm text-white focus:outline-none focus:ring-1 focus:ring-brand-500 disabled:opacity-50"
        placeholder={placeholder}
        value={query}
        disabled={disabled}
        onChange={(e) => {
          const v = e.target.value
          setQuery(v)
          setOpen(true)
          if (allowCustom) onChange(v)      // free text becomes the value
          else if (!v) onChange('')
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={handleKeyDown}
      />
      {open && !disabled && filtered.length > 0 && (
        <ul ref={listRef} className="absolute z-50 mt-1 w-full bg-gray-800 border border-gray-700 rounded-lg shadow-lg max-h-48 overflow-y-auto">
          {filtered.map((opt, i) => (
            <li
              key={opt}
              onMouseDown={() => select(opt)}
              onMouseEnter={() => setHighlighted(i)}
              className={`px-3 py-2 text-sm cursor-pointer ${i === highlighted ? 'bg-gray-700 text-white' : opt === value ? 'text-brand-400 font-semibold' : 'text-white'}`}
            >
              {opt}
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
