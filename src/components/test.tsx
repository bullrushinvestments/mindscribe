import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestFormInputs {
  question: string;
  answer: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      reset();
      setLoading(false);
    }, 1000).catch((err) => {
      setError('An error occurred while submitting the form.');
      setLoading(false);
    });
  };

  return (
    <div className="p-4">
      <h2 className={twMerge("text-xl font-bold mb-4", "dark:text-white")}>Write Tests</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="question" className="block mb-1">Question</label>
          <input
            type="text"
            id="question"
            {...register("question", { required: "This field is required." })}
            aria-invalid={errors.question ? 'true' : 'false'}
            className={twMerge(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500",
              errors.question && "border-red-500"
            )}
          />
          {errors.question && <p role="alert" aria-live="assertive" className="mt-1 text-sm text-red-600">{errors.question.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block mb-1">Answer</label>
          <input
            type="text"
            id="answer"
            {...register("answer", { required: "This field is required." })}
            aria-invalid={errors.answer ? 'true' : 'false'}
            className={twMerge(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500",
              errors.answer && "border-red-500"
            )}
          />
          {errors.answer && <p role="alert" aria-live="assertive" className="mt-1 text-sm text-red-600">{errors.answer.message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none",
            loading && "cursor-not-allowed opacity-70"
          )}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;

import React, { useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { twMerge } from 'tailwind-merge';

interface TestFormInputs {
  question: string;
  answer: string;
}

const WriteTests: React.FC = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const { register, handleSubmit, reset, formState: { errors } } = useForm<TestFormInputs>();

  const onSubmit: SubmitHandler<TestFormInputs> = (data) => {
    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      console.log(data);
      setError(null);
      reset();
      setLoading(false);
    }, 1000).catch((err) => {
      setError('An error occurred while submitting the form.');
      setLoading(false);
    });
  };

  return (
    <div className="p-4">
      <h2 className={twMerge("text-xl font-bold mb-4", "dark:text-white")}>Write Tests</h2>
      {error && <p role="alert" aria-live="assertive" className="mb-3 text-red-500">{error}</p>}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <label htmlFor="question" className="block mb-1">Question</label>
          <input
            type="text"
            id="question"
            {...register("question", { required: "This field is required." })}
            aria-invalid={errors.question ? 'true' : 'false'}
            className={twMerge(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500",
              errors.question && "border-red-500"
            )}
          />
          {errors.question && <p role="alert" aria-live="assertive" className="mt-1 text-sm text-red-600">{errors.question.message}</p>}
        </div>
        <div className="mb-4">
          <label htmlFor="answer" className="block mb-1">Answer</label>
          <input
            type="text"
            id="answer"
            {...register("answer", { required: "This field is required." })}
            aria-invalid={errors.answer ? 'true' : 'false'}
            className={twMerge(
              "w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500",
              errors.answer && "border-red-500"
            )}
          />
          {errors.answer && <p role="alert" aria-live="assertive" className="mt-1 text-sm text-red-600">{errors.answer.message}</p>}
        </div>
        <button
          type="submit"
          disabled={loading}
          className={twMerge(
            "w-full bg-blue-500 text-white py-2 px-4 rounded-md focus:outline-none",
            loading && "cursor-not-allowed opacity-70"
          )}
        >
          {loading ? 'Submitting...' : 'Submit'}
        </button>
      </form>
    </div>
  );
};

export default WriteTests;