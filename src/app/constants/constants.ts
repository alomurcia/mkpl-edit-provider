import { Validators } from '@angular/forms';

export const FIELDS = [
  {
    name: 'general',
    fields: [
      {
        name: 'company',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(49)
        ]
      },
      {
        name: 'nit',
        validators: [
          Validators.required,
          Validators.pattern('^[0-9]{7,10}-[0-9]{1}')
        ]
      },
      {
        name: 'country',
        validators: [
          Validators.required
        ]
      },
      {
        name: 'region',
        validators: [
          Validators.required
        ]
      },
      {
        name: 'city',
        validators: [
          Validators.required
        ]
      },
      {
        name: 'address',
        validators: [
          Validators.required,
          Validators.maxLength(49)
        ]
      }
    ]
  },
  {
    name: 'contact',
    fields: [
      {
        name: 'contactName',
        validators: [
          Validators.required,
          Validators.minLength(3),
          Validators.maxLength(49)
        ]
      },
      {
        name: 'contactPhone',
        validators: [
          Validators.required,
          Validators.pattern('[0-9]{7,}')
        ]
      },
      {
        name: 'contactEmail',
        validators: [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$'
          ),
          Validators.maxLength(49)
        ]
      },
      {
        name: 'adminEmail',
        validators: [
          Validators.required,
          Validators.pattern(
            '^[a-zA-Z0-9._+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,3}$'
          ),
          Validators.maxLength(49)
        ]
      }
    ]
  }
];
