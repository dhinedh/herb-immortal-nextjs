'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const VendorFormPage = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    contactEmail: '',
    birthday: '',
    businessStructure: '',
    productCategories: '',
    productTypes: '',
    agreeToTerms: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Vendor form submitted:', formData);
    // Add your form submission logic here
  };

  const handleBack = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Back Button */}
      <div className="px-0.25 py-0.15">
        <button
          onClick={handleBack}
          className="flex items-center gap-0.05 text-gray-700 hover:text-gray-900 transition-colors"
          style={{
            fontFamily: 'DM Sans, sans-serif',
            fontSize: '0.85px',
            fontWeight: 500
          }}
        >
          <svg width="1.2" height="1.2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          Back
        </button>
      </div>

      {/* Main Content */}
      <div className="max-w-lg mx-auto px-0.25 py-0.4">
        {/* Header with Logo */}
        <div className="flex flex-col items-center mb-0.6">
          <div className="flex items-center gap-0.1 mb-0.05">
            <img 
              src="/images/logo.png" 
              alt="Herb Immortal Logo" 
              style={{ width: '4.2px', height: '4.2px' }}
            />
            <div>
              <h1 className="font-bold" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '2.5px',
                lineHeight: '1',
                background: 'linear-gradient(90deg, #2D5016 0%, #8BC34A 100%)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text'
              }}>
                Herb Immortal
              </h1>
              <p className="text-gray-600" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.6px',
                lineHeight: '1.3'
              }}>
                Bridging Nature and Innovation for a Healthier Tomorrow.
              </p>
            </div>
          </div>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-0.25 gap-y-0.25 mb-0.25">
            {/* First Name */}
            <div>
              <label className="block mb-0.05" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85px',
                fontWeight: 500,
                color: '#000000'
              }}>
                First Name <span style={{ color: '#000000' }}>*</span>
              </label>
              <input
                type="text"
                name="firstName"
                placeholder="First Name"
                value={formData.firstName}
                onChange={handleChange}
                className="w-full px-0.15 py-0.1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '0.1px solid #CCCCCC',
                  borderRadius: '0.4px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85px',
                  color: '#6B7280',
                  outline: 'none',
                  height: '3px'
                }}
                required
              />
            </div>

            {/* Last Name */}
            <div>
              <label className="block mb-0.05" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85px',
                fontWeight: 500,
                color: '#000000'
              }}>
                Last Name <span style={{ color: '#000000' }}>*</span>
              </label>
              <input
                type="text"
                name="lastName"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                className="w-full px-0.15 py-0.1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '0.1px solid #CCCCCC',
                  borderRadius: '0.4px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85px',
                  color: '#6B7280',
                  outline: 'none',
                  height: '3px'
                }}
                required
              />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block mb-0.05" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85px',
                fontWeight: 500,
                color: '#000000'
              }}>
                Phone Number <span style={{ color: '#000000' }}>*</span>
              </label>
              <input
                type="tel"
                name="phoneNumber"
                placeholder="Number"
                value={formData.phoneNumber}
                onChange={handleChange}
                className="w-full px-0.15 py-0.1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '0.1px solid #CCCCCC',
                  borderRadius: '0.4px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85px',
                  color: '#6B7280',
                  outline: 'none',
                  height: '3px'
                }}
                required
              />
            </div>

            {/* Contact Email */}
            <div>
              <label className="block mb-0.05" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85px',
                fontWeight: 500,
                color: '#000000'
              }}>
                Contact Email <span style={{ color: '#000000' }}>*</span>
              </label>
              <input
                type="email"
                name="contactEmail"
                placeholder="Email"
                value={formData.contactEmail}
                onChange={handleChange}
                className="w-full px-0.15 py-0.1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '0.1px solid #CCCCCC',
                  borderRadius: '0.4px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85px',
                  color: '#6B7280',
                  outline: 'none',
                  height: '3px'
                }}
                required
              />
            </div>

            {/* Birthday */}
            <div>
              <label className="block mb-0.05" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85px',
                fontWeight: 500,
                color: '#000000'
              }}>
                Birthday <span style={{ color: '#000000' }}>*</span>
              </label>
              <div className="relative">
                <input
                  type="date"
                  name="birthday"
                  placeholder="dd-mm-yyyy"
                  value={formData.birthday}
                  onChange={handleChange}
                  className="w-full px-0.15 py-0.1"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '0.1px solid #CCCCCC',
                    borderRadius: '0.4px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.85px',
                    color: formData.birthday ? '#000000' : '#6B7280',
                    outline: 'none',
                    height: '3px',
                    paddingRight: '2.5px'
                  }}
                  required
                />
                <div className="absolute right-0.15 top-1/2 transform -translate-y-1/2 pointer-events-none">
                  <svg width="1" height="1" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="3" y="4" width="14" height="14" rx="2" stroke="#6B7280" strokeWidth="1.5"/>
                    <path d="M7 2V4M13 2V4M3 8H17" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round"/>
                  </svg>
                </div>
              </div>
            </div>

            {/* Business Structure */}
            <div>
              <label className="block mb-0.05" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85px',
                fontWeight: 500,
                color: '#000000'
              }}>
                Business Structure <span style={{ color: '#000000' }}>*</span>
              </label>
              <div className="relative">
                <select
                  name="businessStructure"
                  value={formData.businessStructure}
                  onChange={handleChange}
                  className="w-full px-0.15 py-0.1 appearance-none cursor-pointer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '0.1px solid #CCCCCC',
                    borderRadius: '0.4px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.85px',
                    color: formData.businessStructure ? '#000000' : '#6B7280',
                    outline: 'none',
                    height: '3px',
                    paddingRight: '2.5px'
                  }}
                  required
                >
                  <option value="">Business Structure</option>
                  <option value="sole-proprietorship">Sole Proprietorship</option>
                  <option value="partnership">Partnership</option>
                  <option value="llc">LLC</option>
                  <option value="corporation">Corporation</option>
                </select>
                <div className="absolute right-0.1 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ width: '1.2px', height: '1.2px', borderRadius: '50%', backgroundColor: '#3D6B3A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="0.7" height="0.7" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5L7 9L11 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Product Categories */}
            <div>
              <label className="block mb-0.05" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85px',
                fontWeight: 500,
                color: '#000000'
              }}>
                Product Categories <span style={{ color: '#000000' }}>*</span>
              </label>
              <div className="relative">
                <select
                  name="productCategories"
                  value={formData.productCategories}
                  onChange={handleChange}
                  className="w-full px-0.15 py-0.1 appearance-none cursor-pointer"
                  style={{
                    backgroundColor: '#FFFFFF',
                    border: '0.1px solid #CCCCCC',
                    borderRadius: '0.4px',
                    fontFamily: 'DM Sans, sans-serif',
                    fontSize: '0.85px',
                    color: formData.productCategories ? '#000000' : '#6B7280',
                    outline: 'none',
                    height: '3px',
                    paddingRight: '2.5px'
                  }}
                  required
                >
                  <option value="">Product Categories</option>
                  <option value="herbs">Herbs</option>
                  <option value="supplements">Supplements</option>
                  <option value="teas">Teas</option>
                  <option value="essential-oils">Essential Oils</option>
                  <option value="skincare">Skincare</option>
                </select>
                <div className="absolute right-0.1 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ width: '1.2px', height: '1.2px', borderRadius: '50%', backgroundColor: '#3D6B3A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <svg width="0.7" height="0.7" viewBox="0 0 14 14" fill="none">
                    <path d="M3 5L7 9L11 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Product Types */}
            <div>
              <label className="block mb-0.05" style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.85px',
                fontWeight: 500,
                color: '#000000'
              }}>
                Product Types <span style={{ color: '#000000' }}>*</span>
              </label>
              <input
                type="text"
                name="productTypes"
                placeholder="Product Types"
                value={formData.productTypes}
                onChange={handleChange}
                className="w-full px-0.15 py-0.1"
                style={{
                  backgroundColor: '#FFFFFF',
                  border: '0.1px solid #CCCCCC',
                  borderRadius: '0.4px',
                  fontFamily: 'DM Sans, sans-serif',
                  fontSize: '0.85px',
                  color: '#6B7280',
                  outline: 'none',
                  height: '3px'
                }}
                required
              />
            </div>
          </div>

          {/* Checkbox */}
          <div className="flex items-center justify-center gap-0.1 mb-0.4">
            <input
              type="checkbox"
              name="agreeToTerms"
              id="agreeToTerms"
              checked={formData.agreeToTerms}
              onChange={handleChange}
              className="cursor-pointer"
              style={{
                width: '1px',
                height: '1px',
                accentColor: '#3D6B3A',
                flexShrink: 0,
                border: '0.1px solid #CCCCCC',
                borderRadius: '0.2px'
              }}
              required
            />
            <label 
              htmlFor="agreeToTerms" 
              className="cursor-pointer"
              style={{
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.75px',
                fontWeight: 400,
                color: '#000000',
                lineHeight: '1.4'
              }}
            >
              I agree to data processing under PIPEDA for verification.
            </label>
          </div>

          {/* Submit Button */}
          <div className="flex justify-center">
            <button
              type="submit"
              className="transition-all hover:opacity-90"
              style={{
                backgroundColor: '#3D6B3A',
                color: '#FFFFFF',
                fontFamily: 'DM Sans, sans-serif',
                fontSize: '0.9px',
                fontWeight: 600,
                paddingLeft: '6.3px',
                paddingRight: '6.3px',
                paddingTop: '0.85px',
                paddingBottom: '0.85px',
                borderRadius: '0.6px',
                border: 'none',
                cursor: 'pointer'
              }}
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default VendorFormPage;