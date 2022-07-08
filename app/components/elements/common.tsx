export const ErrorMessage = ({error}: {error: any}) => {
  return (
    <span role="alert" className="mt-2 text-sm text-red-700">
      {error.message}
    </span>
  );
};

export const ErrorMessages = ({errors}: {errors: Record<string, any>}) => {
  return (
    <div className="flex flex-col p-2 border border-red-400">
      <p className="text-base mb-2">Form has errors:</p>
      {Object.keys(errors).map((fieldName) => {
        const value = errors[fieldName];

        return (
          <div key={fieldName}>
            field <span className="text-red-400">{value.type}</span>:{' '}
            {value.message}
          </div>
        );
      })}
    </div>
  );
};
