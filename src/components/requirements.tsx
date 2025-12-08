import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface IContentRequirements {
  title: string;
  description: string;
  authorName: string;
  tags: string[];
}

const GatherRequirements: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<IContentRequirements>();
  const toast = useToast();

  const onSubmit = (data: IContentRequirements) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      setIsLoading(false);
      toast({
        title: 'Success!',
        description: 'Your requirements have been gathered successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }, 2000);

    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: true })}
          className={`w-full px-3 py-2 border rounded ${formState.errors.title ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: true })}
          rows={5}
          className={`w-full px-3 py-2 border rounded ${formState.errors.description ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
          Author Name
        </label>
        <input
          type="text"
          id="authorName"
          {...register('authorName', { required: true })}
          className={`w-full px-3 py-2 border rounded ${formState.errors.authorName ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          {...register('tags', { required: true })}
          placeholder="Enter tags separated by commas"
          className={`w-full px-3 py-2 border rounded ${formState.errors.tags ? 'border-red-500' : ''}`}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';

interface IContentRequirements {
  title: string;
  description: string;
  authorName: string;
  tags: string[];
}

const GatherRequirements: React.FC = () => {
  const [isLoading, setIsLoading] = useState(false);
  const { register, handleSubmit, formState } = useForm<IContentRequirements>();
  const toast = useToast();

  const onSubmit = (data: IContentRequirements) => {
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      console.log('Data submitted:', data);
      setIsLoading(false);
      toast({
        title: 'Success!',
        description: 'Your requirements have been gathered successfully.',
        status: 'success',
        duration: 3000,
        isClosable: true,
      });
    }, 2000);

    // Handle form submission here
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="p-6">
      <div className="mb-4">
        <label htmlFor="title" className="block text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          {...register('title', { required: true })}
          className={`w-full px-3 py-2 border rounded ${formState.errors.title ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="description" className="block text-sm font-medium text-gray-700">
          Description
        </label>
        <textarea
          id="description"
          {...register('description', { required: true })}
          rows={5}
          className={`w-full px-3 py-2 border rounded ${formState.errors.description ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="authorName" className="block text-sm font-medium text-gray-700">
          Author Name
        </label>
        <input
          type="text"
          id="authorName"
          {...register('authorName', { required: true })}
          className={`w-full px-3 py-2 border rounded ${formState.errors.authorName ? 'border-red-500' : ''}`}
        />
      </div>

      <div className="mb-4">
        <label htmlFor="tags" className="block text-sm font-medium text-gray-700">
          Tags
        </label>
        <input
          type="text"
          id="tags"
          {...register('tags', { required: true })}
          placeholder="Enter tags separated by commas"
          className={`w-full px-3 py-2 border rounded ${formState.errors.tags ? 'border-red-500' : ''}`}
        />
      </div>

      <button
        type="submit"
        disabled={isLoading}
        className="mt-6 w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-300"
      >
        {isLoading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default GatherRequirements;