function TextInput({ label, type, name, placeholder, onChange, value }) {
  return (
    <div className="flex flex-col">
      <span className="font-semibold text-xl">{label}</span>
      <input
        autoComplete="off"
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        className="border-2 border-gray-600 p-2 focus:outline-none"
      />
    </div>
  );
}

export default TextInput;
