const Toggle = ({ unit, onToggle }) => {
    return (
        <div className="toggle">
            <label>
                <input
                    type="checkbox"
                    checked={unit === 'imperial'}
                    onChange={onToggle}
                />
                Toggle to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
            </label>
        </div>
    );
};

export default Toggle;