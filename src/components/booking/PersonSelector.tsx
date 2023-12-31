export default function PersonSelector({ onBarberSelect, selectedPerson }) {
  const persons = [
    { name: 'Tobi', id: '123' },
    { name: 'Tim', id: '345' },
    { name: 'Ozan', id: '789' },
  ];

  return (
    <div className="flex flex-col gap-2">
      <h1 className="text-xl">Select a Person</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8  gap-2 bg-white rounded-2xl p-2">
        {persons.map((person) => (
          <button
            key={person.id}
            onClick={() => onBarberSelect(person.id)}
            className={` text-black rounded-xl p-2 hover:bg-rose-400 ${
              selectedPerson === person.id ? 'bg-rose-300' : ''
            }`}
          >
            {person.name}
          </button>
        ))}
      </div>
    </div>
  );
}
