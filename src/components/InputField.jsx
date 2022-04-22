export default function InputField({ setup, state }) {
  const [getter, setter] = state;
  const { label, placeholder } = setup;

  return (
    <section className="input_field">
      <label>
        {label}
        <input
          type="text"
          placeholder={placeholder}
          value={getter}
          onChange={(event) => setter(event.target.value)}
        />
      </label>
    </section>
  );
}
