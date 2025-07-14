// components/ContactForm.tsx
import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';

interface FormValues {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const ContactForm: React.FC = () => {
  const formik = useFormik<FormValues>({
    initialValues: {
      name: '',
      email: '',
      phone: '',
      message: '',
    },
    validationSchema: Yup.object({
      name: Yup.string().max(50, 'Must be 50 characters or less').required('Required'),
      email: Yup.string().email('Invalid email address').required('Required'),
      phone: Yup.string().matches(/^[0-9+\-() ]*$/, 'Invalid phone number').required('Required'),
      message: Yup.string().min(10, 'Must be at least 10 characters').required('Required'),
    }),
    onSubmit: (values) => {
      // Simulate form submission
      console.log('Form Submitted with values:', values);
      // Instead of alert, make a real submission (e.g., API call)
      alert('Form submitted successfully!');
    },
  });

  return (
    <form onSubmit={formik.handleSubmit} className="bg-gray-50 p-6 sm:p-8 rounded-md shadow-md flex flex-col gap-6">
      {/* Name */}
      <div className="flex flex-col">
        <label htmlFor="name" className="font-semibold mb-2 text-sm sm:text-base text-gray-700">
          Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Enter your name"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.name}
          className={`border rounded px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 ${
            formik.touched.name && formik.errors.name
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-[#A65F00]'
          }`}
        />
        {formik.touched.name && formik.errors.name && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{formik.errors.name}</p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col">
        <label htmlFor="email" className="font-semibold mb-2 text-sm sm:text-base text-gray-700">
          Email
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Enter your email"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.email}
          className={`border rounded px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 ${
            formik.touched.email && formik.errors.email
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-[#A65F00]'
          }`}
        />
        {formik.touched.email && formik.errors.email && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{formik.errors.email}</p>
        )}
      </div>

      {/* Phone */}
      <div className="flex flex-col">
        <label htmlFor="phone" className="font-semibold mb-2 text-sm sm:text-base text-gray-700">
          Phone
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          placeholder="Enter your phone"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.phone}
          className={`border rounded px-4 py-2 text-sm sm:text-base focus:outline-none focus:ring-2 ${
            formik.touched.phone && formik.errors.phone
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-[#A65F00]'
          }`}
        />
        {formik.touched.phone && formik.errors.phone && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{formik.errors.phone}</p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col">
        <label htmlFor="message" className="font-semibold mb-2 text-sm sm:text-base text-gray-700">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={4}
          placeholder="Your message"
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
          value={formik.values.message}
          className={`border rounded px-4 py-2 resize-none text-sm sm:text-base focus:outline-none focus:ring-2 ${
            formik.touched.message && formik.errors.message
              ? 'border-red-500 focus:ring-red-500'
              : 'border-gray-300 focus:ring-[#A65F00]'
          }`}
        />
        {formik.touched.message && formik.errors.message && (
          <p className="text-red-500 text-xs sm:text-sm mt-1">{formik.errors.message}</p>
        )}
      </div>

      {/* Submit Button */}
      <button
        type="submit"
        className="bg-[#A65F00] text-white py-3 rounded-full hover:bg-[#925000] cursor-pointer transition text-base sm:text-lg"
      >
        Submit
      </button>
    </form>
  );
};

export default ContactForm;
