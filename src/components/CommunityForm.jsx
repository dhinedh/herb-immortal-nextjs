'use client'

import { useState, useEffect } from 'react';

const CommunityForm = ({ isOpen, onClose }) => {
  const [step, setStep] = useState(1);
  const [mobileStep, setMobileStep] = useState(1);
  const [isClosing, setIsClosing] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    phoneNumber: '',
    contactEmail: '',
    birthday: '',
    gender: '',
    location: '',
    role: '',
    businessStructure: '',
    productCategories: '',
    productTypes: ''
  });
  const [agreedToPIPEDA, setAgreedToPIPEDA] = useState(false);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  useEffect(() => {
    if (step === 1 && isOpen && typeof window !== 'undefined' && window.innerWidth >= 768) {
      const timer = setTimeout(() => {
        setStep(2);
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [step, isOpen]);

  useEffect(() => {
    if (step === 3 || mobileStep === 4) {
      const timer = setTimeout(() => {
        setIsClosing(true);
        setTimeout(() => {
          onClose();
          setIsClosing(false);
        }, 500);
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [step, mobileStep, onClose]);

  if (!isOpen) return null;

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleMobileNext = () => {
    setMobileStep(mobileStep + 1);
  };

  const handleMobileBack = () => {
    setMobileStep(mobileStep - 1);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    console.log('Form submitted:', formData);
    
    if (typeof window !== 'undefined' && window.innerWidth >= 768) {
      setStep(3);
    } else {
      setMobileStep(4);
    }
  };

  const StepIndicator = ({ currentStep, totalSteps }) => (
    <div className="flex justify-center gap-2 mb-8">
      {[1, 2, 3].map((stepNum) => (
        <div
          key={stepNum}
          style={{
            width: '100px',
            height: '8px',
            borderRadius: '4px',
            background: stepNum === currentStep ? '#3A5B22' : '#E5E7EB',
            opacity: 1
          }}
        ></div>
      ))}
    </div>
  );

  return (
    <div
      className="fixed inset-0 bg-white z-[9999] overflow-y-auto transition-opacity duration-500"
      style={{
        scrollbarWidth: 'none',
        msOverflowStyle: 'none',
        opacity: isClosing ? 0 : 1
      }}
    >
      <style>{`
        .fixed.inset-0::-webkit-scrollbar {
          display: none;
        }
        .form-field:focus {
          box-shadow: 0px 2px 6px 0px #275D2C !important;
          border: 1px solid #275D2C !important;
          background: #FFFFFF !important;
          outline: none;
        }
        .form-field::placeholder {
          font-family: 'DM Sans';
          font-weight: 500;
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0%;
          color: #6F6C90;
        }
        .form-field {
          font-family: 'DM Sans';
          font-weight: 500;
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0%;
          color: #6F6C90;
        }
        .form-field option {
          font-family: 'DM Sans';
          font-weight: 500;
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0%;
          color: #6F6C90;
        }
        .form-label {
          font-family: 'DM Sans';
          font-weight: 500;
          font-size: 18px;
          line-height: 20px;
          letter-spacing: 0%;
          color: '#170F49';
        }
        select.form-field {
          appearance: none !important;
          -webkit-appearance: none !important;
          -moz-appearance: none !important;
          background-image: url("data:image/svg+xml,%3Csvg width='22' height='22' viewBox='0 0 22 22' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Ccircle cx='11' cy='11' r='11' fill='%23275D2C'/%3E%3Cpath d='M7 9L11 13L15 9' stroke='white' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'/%3E%3C/svg%3E") !important;
          background-repeat: no-repeat !important;
          background-position: right 16px center !important;
          background-size: 22px 22px !important;
          background-color: #FFFFFF !important;
          padding-right: 48px !important;
        }
        @keyframes spin {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
        .loader-spin {
          animation: spin 1s linear;
        }
      `}</style>
      <div className="min-h-screen w-full relative">
        {/* Mobile Version */}
        <div className="block md:hidden">
          {mobileStep === 1 && (
            <div className="min-h-screen flex flex-col">
              <div className="pt-6 px-6">
                <StepIndicator currentStep={1} totalSteps={3} />
              </div>

              <div className="flex-1 flex flex-col justify-evenly px-6 pb-6 text-center">
                <h2
                  style={{
                    fontFamily: 'DM Sans',
                    fontWeight: 500,
                    fontSize: '34px',
                    lineHeight: '120%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    verticalAlign: 'middle'
                  }}
                >
                  Welcome to <span style={{ color: '#275D2C' }}>MyHerbalShop.ai</span><br />Health Community
                </h2>

                <div className="flex justify-center">
                  <img src="/images/FormImg.jpg" alt="Community Illustration" style={{ width: '374px', height: '249px', opacity: 1 }} />
                </div>

                <p
                  style={{
                    fontFamily: 'Poppins',
                    fontWeight: 500,
                    fontSize: '14px',
                    lineHeight: '140%',
                    letterSpacing: '0%',
                    textAlign: 'center',
                    color: '#3A5B22',
                    padding: '0 16px'
                  }}
                >
                  This form is designed to gather basic details from members interested in the MyHerbalShop.ai community.
                </p>

                <div className="flex justify-center">
                  <button
                    onClick={handleMobileNext}
                    className="flex items-center justify-center gap-2"
                    style={{
                      background: '#275D2C',
                      border: '1px solid #275D2C',
                      width: '351px',
                      height: '52px',
                      borderRadius: '40px',
                      color: 'white',
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '16px'
                    }}
                  >
                    Next →
                  </button>
                </div>
              </div>
            </div>
          )}

          {mobileStep === 2 && (
            <div className="min-h-screen flex flex-col">
              <div className="pt-6 px-6">
                <StepIndicator currentStep={2} totalSteps={3} />
              </div>

              <div className="flex-1 flex flex-col justify-center px-6 pb-6">
                <div className="space-y-10 mb-8">
                  <div>
                    <label className="form-label block mb-2">Name <span style={{ color: '#275D2C' }}>*</span></label>
                    <input
                      type="text"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      placeholder="Enter your name"
                      className="form-field px-4 py-3 w-full"
                      style={{ background: '#FFFFFF', border: '1px solid #275D2C', height: '56px', borderRadius: '30px', opacity: 1 }}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label block mb-2">Gender <span style={{ color: '#275D2C' }}>*</span></label>
                    <select
                      name="gender"
                      value={formData.gender || ''}
                      onChange={handleInputChange}
                      className="form-field px-4 py-3 w-full"
                      style={{ background: '#FFFFFF', border: '1px solid #275D2C', height: '56px', borderRadius: '30px', opacity: 1 }}
                      required
                    >
                      <option value="">Select Gender</option>
                      <option value="male">Male</option>
                      <option value="female">Female</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div>
                    <label className="form-label block mb-2">Birthday <span style={{ color: '#275D2C' }}>*</span></label>
                    <input
                      type="date"
                      name="birthday"
                      value={formData.birthday}
                      onChange={handleInputChange}
                      className="form-field px-4 py-3 w-full"
                      style={{ background: '#FFFFFF', border: '1px solid #275D2C', height: '56px', borderRadius: '30px', opacity: 1 }}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={handleMobileBack}
                    className="flex items-center gap-2"
                    style={{
                      background: 'transparent',
                      color: '#3A5B22',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '16px',
                      border: '1px solid #3A5B22'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 16L7 10L13 4" stroke="#3A5B22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back
                  </button>

                  <button
                    onClick={handleMobileNext}
                    className="flex items-center gap-2"
                    style={{
                      background: '#3A5B22',
                      color: 'white',
                      padding: '12px 32px',
                      borderRadius: '10px',
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '16px'
                    }}
                  >
                    Next
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M7 4L13 10L7 16" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          )}

          {mobileStep === 3 && (
            <div className="min-h-screen flex flex-col">
              <div className="pt-6 px-6">
                <StepIndicator currentStep={3} totalSteps={3} />
              </div>

              <div className="flex-1 flex flex-col justify-center px-6 pb-6">
                <div className="space-y-10 mb-8">
                  <div>
                    <label className="form-label block mb-2">Contact Email <span style={{ color: '#275D2C' }}>*</span></label>
                    <input
                      type="email"
                      name="contactEmail"
                      value={formData.contactEmail}
                      onChange={handleInputChange}
                      placeholder="Enter your email"
                      className="form-field px-4 py-3 w-full"
                      style={{ background: '#FFFFFF', border: '1px solid #275D2C', height: '56px', borderRadius: '30px', opacity: 1 }}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label block mb-2">Phone Number <span style={{ color: '#275D2C' }}>*</span></label>
                    <input
                      type="tel"
                      name="phoneNumber"
                      value={formData.phoneNumber}
                      onChange={handleInputChange}
                      placeholder="Enter your phone number"
                      className="form-field px-4 py-3 w-full"
                      style={{ background: '#FFFFFF', border: '1px solid #275D2C', height: '56px', borderRadius: '30px', opacity: 1 }}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label block mb-2">Your Location <span style={{ color: '#275D2C' }}>*</span></label>
                    <input
                      type="text"
                      name="location"
                      value={formData.location}
                      onChange={handleInputChange}
                      placeholder="Enter your location"
                      className="form-field px-4 py-3 w-full"
                      style={{ background: '#FFFFFF', border: '1px solid #275D2C', height: '56px', borderRadius: '30px', opacity: 1 }}
                      required
                    />
                  </div>

                  <div>
                    <label className="form-label block mb-2">Role/Designation <span style={{ color: '#275D2C' }}>*</span></label>
                    <input
                      type="text"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="Enter your role"
                      className="form-field px-4 py-3 w-full"
                      style={{ background: '#FFFFFF', border: '1px solid #275D2C', height: '56px', borderRadius: '30px', opacity: 1 }}
                      required
                    />
                  </div>
                </div>

                <div className="flex justify-between items-center">
                  <button
                    onClick={handleMobileBack}
                    className="flex items-center gap-2"
                    style={{
                      background: 'transparent',
                      color: '#3A5B22',
                      padding: '12px 24px',
                      borderRadius: '10px',
                      fontFamily: 'Poppins',
                      fontWeight: 600,
                      fontSize: '16px',
                      border: '1px solid #3A5B22'
                    }}
                  >
                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M13 16L7 10L13 4" stroke="#3A5B22" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    Back
                  </button>

                  <button
                    onClick={handleSubmit}
                    className="flex items-center gap-2"
                    style={{
                      background: '#3A5B22',
                      color: 'white',
                      padding: '12px 32px',
                      borderRadius: '10px',
                      fontFamily: 'Poppins',
                      fontWeight: 700,
                      fontSize: '16px'
                    }}
                  >
                    Submit
                  </button>
                </div>
              </div>
            </div>
          )}

          {mobileStep === 4 && (
            <div className="min-h-screen flex flex-col justify-evenly px-6 py-6 text-center">
              <div className="flex justify-center">
                <img src="/images/FormImg.jpg" alt="Community Illustration" style={{ width: '100%', maxWidth: '400px', height: 'auto', opacity: 1 }} />
              </div>

              <h2
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '28px',
                  lineHeight: '120%',
                  letterSpacing: '0%',
                  textAlign: 'center'
                }}
              >
                Congratulation 🎉
              </h2>

              <p
                className="mx-auto"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '14px',
                  lineHeight: '140%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  color: '#3A5B22',
                  padding: '0 16px'
                }}
              >
                We will review your request and give a reply within three days.
              </p>
            </div>
          )}
        </div>

        {/* Desktop Version */}
        <div className="hidden md:block">
          {step === 1 ? (
            <div className="p-8 sm:p-12 md:p-16 text-center">
              <div className="flex justify-center mb-24">
                <div className="flex items-center gap-3">
                  <img src="/images/logo.png" alt="Herb Immortal" style={{ width: '91px', height: '84px', opacity: 1 }} />
                  <div className="text-left">
                    <h1
                      className="font-bold"
                      style={{
                        background: 'linear-gradient(90deg, #275D2C 0%, #CBF696 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Poppins',
                        fontSize: '40px',
                        lineHeight: '100%'
                      }}
                    >
                      Herb Immortal
                    </h1>
                    <p
                      className="text-gray-600"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '11px',
                        lineHeight: '100%',
                        letterSpacing: '0%'
                      }}
                    >
                      Bridging Nature and Innovation for a Healthier Tomorrow.
                    </p>
                  </div>
                </div>
              </div>

             

              <div className="mb-6 flex justify-center">
                <div
                  className="loader-spin rounded-full"
                  style={{
                    width: '96px',
                    height: '96px',
                    background: 'conic-gradient(from 0deg at 50% 50%, #CBF696 0deg, #265C2D 360deg)',
                    opacity: 1,
                    position: 'relative'
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      top: '15px',
                      left: '15px',
                      right: '15px',
                      bottom: '15px',
                      background: 'white',
                      borderRadius: '50%'
                    }}
                  ></div>
                </div>
              </div>

              <div className="mb-6 flex justify-center">
                <img src="/images/FormImg.jpg" alt="Community Illustration" style={{ width: '600px', height: 'auto', opacity: 1 }} />
              </div>
            </div>
          ) : step === 2 ? (
            <div className="p-8 sm:p-12 md:p-16 relative flex flex-col items-center justify-center min-h-screen">
              <div className="flex justify-center mb-8">
                <div className="flex items-center gap-3">
                  <img src="/images/logo.png" alt="Herb Immortal" style={{ width: '91px', height: '84px', opacity: 1 }} />
                  <div className="text-left">
                    <h1
                      className="font-bold"
                      style={{
                        background: 'linear-gradient(90deg, #275D2C 0%, #CBF696 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Poppins',
                        fontSize: '40px',
                        lineHeight: '100%'
                      }}
                    >
                      Herb Immortal
                    </h1>
                    <p
                      className="text-gray-600"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '11px',
                        lineHeight: '100%',
                        letterSpacing: '0%'
                      }}
                    >
                      Bridging Nature and Innovation for a Healthier Tomorrow.
                    </p>
                  </div>
                </div>
              </div>

              <div
                className="relative z-10 bg-white"
                style={{
                  borderRadius: '30px',
                  width: '900px',
                  padding: '2rem',
                }}
              >
                <div className="text-center mb-8">
                 
                </div>

                <form onSubmit={handleSubmit} className="mx-auto">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="form-label block mb-2">First Name *</label>
                      <input
                        type="text"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        placeholder="First Name"
                        className="form-field px-4 py-3 w-full"
                        style={{ background: '#FFFFFF', border: '1px solid #3A5B22', height: '56px', borderRadius: '10px', opacity: 1 }}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label block mb-2">Last Name *</label>
                      <input
                        type="text"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        placeholder="Last Name"
                        className="form-field px-4 py-3 w-full"
                        style={{ background: '#FFFFFF', border: '1px solid #3A5B22', height: '56px', borderRadius: '10px', opacity: 1 }}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label block mb-2">Phone Number *</label>
                      <input
                        type="tel"
                        name="phoneNumber"
                        value={formData.phoneNumber}
                        onChange={handleInputChange}
                        placeholder="Number"
                        className="form-field px-4 py-3 w-full"
                        style={{ background: '#FFFFFF', border: '1px solid #3A5B22', height: '56px', borderRadius: '10px', opacity: 1 }}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label block mb-2">Contact Email *</label>
                      <input
                        type="email"
                        name="contactEmail"
                        value={formData.contactEmail}
                        onChange={handleInputChange}
                        placeholder="Email"
                        className="form-field px-4 py-3 w-full"
                        style={{ background: '#FFFFFF', border: '1px solid #3A5B22', height: '56px', borderRadius: '10px', opacity: 1 }}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label block mb-2">Birthday *</label>
                      <input
                        type="date"
                        name="birthday"
                        value={formData.birthday}
                        onChange={handleInputChange}
                        className="form-field px-4 py-3 w-full"
                        style={{ background: '#FFFFFF', border: '1px solid #3A5B22', height: '56px', borderRadius: '10px', opacity: 1 }}
                        required
                      />
                    </div>

                    <div>
                      <label className="form-label block mb-2">Business Structure *</label>
                      <select
                        name="businessStructure"
                        value={formData.businessStructure}
                        onChange={handleInputChange}
                        className="form-field px-4 py-3 w-full"
                        style={{ background: '#FFFFFF', border: '1px solid #3A5B22', height: '56px', borderRadius: '10px', opacity: 1 }}
                        required
                      >
                        <option value="">Business Structure</option>
                        <option value="sole-proprietorship">Sole Proprietorship</option>
                        <option value="partnership">Partnership</option>
                        <option value="llc">LLC</option>
                        <option value="corporation">Corporation</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label block mb-2">Product Categories *</label>
                      <select
                        name="productCategories"
                        value={formData.productCategories}
                        onChange={handleInputChange}
                        className="form-field px-4 py-3 w-full"
                        style={{ background: '#FFFFFF', border: '1px solid #3A5B22', height: '56px', borderRadius: '10px', opacity: 1 }}
                        required
                      >
                        <option value="">Product Categories</option>
                        <option value="herbs">Herbs</option>
                        <option value="supplements">Supplements</option>
                        <option value="teas">Teas</option>
                        <option value="essential-oils">Essential Oils</option>
                      </select>
                    </div>

                    <div>
                      <label className="form-label block mb-2">Product Types *</label>
                      <input
                        type="text"
                        name="productTypes"
                        value={formData.productTypes}
                        onChange={handleInputChange}
                        placeholder="Product Types"
                        className="form-field px-4 py-3 w-full"
                        style={{ background: '#FFFFFF', border: '1px solid #3A5B22', height: '56px', borderRadius: '10px', opacity: 1 }}
                        required
                      />
                    </div>
                  </div>
                </form>
              </div>

              <div className="mt-8 flex justify-center items-center">
                <label className="flex items-center gap-3 cursor-pointer">
                  <input
                    type="checkbox"
                    checked={agreedToPIPEDA}
                    onChange={(e) => setAgreedToPIPEDA(e.target.checked)}
                    className="w-5 h-5 rounded border-2 border-green-700 cursor-pointer accent-green-700"
                    required
                  />
                  <span className="text-sm" style={{ fontFamily: 'DM Sans', fontWeight: 500, color: '#170F49' }}>
                    I agree to data processing under PIPEDA for verification.
                  </span>
                </label>
              </div>

              <div className="mt-6 flex justify-center">
                <button
                  onClick={handleSubmit}
                  className="text-white hover:opacity-90 transition-all duration-200"
                  style={{
                    background: '#3A5B22',
                    width: '300px',
                    height: '56px',
                    borderRadius: '10px',
                    opacity: 1,
                    fontFamily: 'Poppins',
                    fontWeight: 700,
                    fontSize: '18px',
                    lineHeight: '100%',
                    letterSpacing: '0%'
                  }}
                >
                  Submit
                </button>
              </div>
            </div>
          ) : (
            <div className="p-8 sm:p-12 md:p-16 text-center">
              <div className="flex justify-center mb-24">
                <div className="flex items-center gap-3">
                  <img src="/images/logo.png" alt="Herb Immortal" style={{ width: '91px', height: '84px', opacity: 1 }} />
                  <div className="text-left">
                    <h1
                      className="font-bold"
                      style={{
                        background: 'linear-gradient(90deg, #275D2C 0%, #CBF696 100%)',
                        WebkitBackgroundClip: 'text',
                        WebkitTextFillColor: 'transparent',
                        backgroundClip: 'text',
                        fontFamily: 'Poppins',
                        fontSize: '40px',
                        lineHeight: '100%'
                      }}
                    >
                      Herb Immortal
                    </h1>
                    <p
                      className="text-gray-600"
                      style={{
                        fontFamily: 'Poppins',
                        fontWeight: 400,
                        fontSize: '11px',
                        lineHeight: '100%',
                        letterSpacing: '0%'
                      }}
                    >
                      Bridging Nature and Innovation for a Healthier Tomorrow.
                    </p>
                  </div>
                </div>
              </div>

              <h2
                className="mb-4"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '33px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  verticalAlign: 'middle'
                }}
              >
                Congratulation 🎉
              </h2>
              <p
                className="mb-6 mx-auto"
                style={{
                  fontFamily: 'Poppins',
                  fontWeight: 500,
                  fontSize: '17px',
                  lineHeight: '100%',
                  letterSpacing: '0%',
                  textAlign: 'center',
                  verticalAlign: 'middle',
                  width: '640px',
                  height: '52px',
                  opacity: 1,
                  color: '#3A5B22'
                }}
              >
                We will review your request and give a reply within three days.
              </p>

              <div className="mb-6 flex justify-center">
                <img src="/images/FormImg.jpg" alt="Community Illustration" style={{ width: '600px', height: 'auto', opacity: 1 }} />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CommunityForm;