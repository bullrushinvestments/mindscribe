import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { CircularProgress, TextField, Button, Typography, Box, Grid } from '@mui/material';

interface BusinessSpec {
  id?: string;
  name: string;
  description: string;
  industry: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    name: '',
    description: '',
    industry: 'content',
    contactEmail: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessSpec({
      ...businessSpec,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with actual API endpoint
      const response = await axios.post('/api/business-specification', businessSpec);
      alert('Business specification created successfully!');
    } catch (err) {
      setError('Failed to create business specification. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            required
            fullWidth
            id="business-name"
            label="Business Name"
            value={businessSpec.name}
            onChange={handleInputChange}
            aria-label="Enter business name"
            inputProps={{ 'aria-required': true }}
            error={!!error}
            helperText={error || ' '}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            required
            fullWidth
            id="business-description"
            label="Business Description"
            value={businessSpec.description}
            onChange={handleInputChange}
            aria-label="Enter business description"
            inputProps={{ 'aria-required': true }}
            error={!!error}
            helperText={error || ' '}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="contactEmail"
            required
            fullWidth
            id="business-email"
            label="Contact Email"
            value={businessSpec.contactEmail}
            onChange={handleInputChange}
            aria-label="Enter contact email"
            inputProps={{ 'aria-required': true }}
            error={!!error}
            helperText={error || ' '}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
        aria-label="Create business specification"
      >
        {loading ? (
          <CircularProgress size={24} />
        ) : (
          'Create Business Specification'
        )}
      </Button>
    </Box>
  );
};

export default CreateBusinessSpecification;

import React, { useState, useEffect } from 'react';
import axios from 'axios';
import clsx from 'clsx';
import { CircularProgress, TextField, Button, Typography, Box, Grid } from '@mui/material';

interface BusinessSpec {
  id?: string;
  name: string;
  description: string;
  industry: string;
  contactEmail: string;
}

const CreateBusinessSpecification: React.FC = () => {
  const [businessSpec, setBusinessSpec] = useState<BusinessSpec>({
    name: '',
    description: '',
    industry: 'content',
    contactEmail: ''
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Fetch initial data if needed
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBusinessSpec({
      ...businessSpec,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      // Replace with actual API endpoint
      const response = await axios.post('/api/business-specification', businessSpec);
      alert('Business specification created successfully!');
    } catch (err) {
      setError('Failed to create business specification. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            name="name"
            required
            fullWidth
            id="business-name"
            label="Business Name"
            value={businessSpec.name}
            onChange={handleInputChange}
            aria-label="Enter business name"
            inputProps={{ 'aria-required': true }}
            error={!!error}
            helperText={error || ' '}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="description"
            required
            fullWidth
            id="business-description"
            label="Business Description"
            value={businessSpec.description}
            onChange={handleInputChange}
            aria-label="Enter business description"
            inputProps={{ 'aria-required': true }}
            error={!!error}
            helperText={error || ' '}
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            name="contactEmail"
            required
            fullWidth
            id="business-email"
            label="Contact Email"
            value={businessSpec.contactEmail}
            onChange={handleInputChange}
            aria-label="Enter contact email"
            inputProps={{ 'aria-required': true }}
            error={!!error}
            helperText={error || ' '}
          />
        </Grid>
      </Grid>
      <Button
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        disabled={loading}
        aria-label="Create business specification"
      >
        {loading ? (
          <CircularProgress size={24} />
        ) : (
          'Create Business Specification'
        )}
      </Button>
    </Box>
  );
};

export default CreateBusinessSpecification;