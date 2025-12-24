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
            <div className="px-6 py-4">
                <button
                    onClick={handleBack}
                    className="flex items-center gap-2 text-gray-700 hover:text-gray-900 transition-colors"
                    style={{
                        fontFamily: 'DM Sans, sans-serif',
                        fontSize: '16px',
                        fontWeight: 500
                    }}
                >
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M19 12H5M5 12L12 19M5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Back
                </button>
            </div>

            {/* Main Content */}
            <div className="max-w-4xl mx-auto px-6 py-8">
                {/* Header with Logo */}
                <div className="flex flex-col items-center mb-12">
                    <div className="flex items-center gap-3 mb-2">
                        <img
                            src="/images/logo.png"
                            alt="Herb Immortal Logo"
                            style={{ width: '80px', height: '80px' }}
                        />
                        <div>
                            <h1 className="font-bold" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '48px',
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
                                fontSize: '12px',
                                lineHeight: '1.3'
                            }}>
                                Bridging Nature and Innovation for a Healthier Tomorrow.
                            </p>
                        </div>
                    </div>
                </div>

                {/* Form */}
                <form onSubmit={handleSubmit} className="max-w-3xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6 mb-6">
                        {/* First Name */}
                        <div>
                            <label className="block mb-2" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px',
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
                                className="w-full px-4 py-3"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #CCCCCC',
                                    borderRadius: '8px',
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '16px',
                                    color: '#6B7280',
                                    outline: 'none',
                                    height: '56px'
                                }}
                                required
                            />
                        </div>

                        {/* Last Name */}
                        <div>
                            <label className="block mb-2" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px',
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
                                className="w-full px-4 py-3"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #CCCCCC',
                                    borderRadius: '8px',
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '16px',
                                    color: '#6B7280',
                                    outline: 'none',
                                    height: '56px'
                                }}
                                required
                            />
                        </div>

                        {/* Phone Number */}
                        <div>
                            <label className="block mb-2" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px',
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
                                className="w-full px-4 py-3"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #CCCCCC',
                                    borderRadius: '8px',
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '16px',
                                    color: '#6B7280',
                                    outline: 'none',
                                    height: '56px'
                                }}
                                required
                            />
                        </div>

                        {/* Contact Email */}
                        <div>
                            <label className="block mb-2" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px',
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
                                className="w-full px-4 py-3"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #CCCCCC',
                                    borderRadius: '8px',
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '16px',
                                    color: '#6B7280',
                                    outline: 'none',
                                    height: '56px'
                                }}
                                required
                            />
                        </div>

                        {/* Birthday */}
                        <div>
                            <label className="block mb-2" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px',
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
                                    className="w-full px-4 py-3"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #CCCCCC',
                                        borderRadius: '8px',
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '16px',
                                        color: formData.birthday ? '#000000' : '#6B7280',
                                        outline: 'none',
                                        height: '56px',
                                        paddingRight: '48px'
                                    }}
                                    required
                                />
                                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                                    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect x="3" y="4" width="14" height="14" rx="2" stroke="#6B7280" strokeWidth="1.5" />
                                        <path d="M7 2V4M13 2V4M3 8H17" stroke="#6B7280" strokeWidth="1.5" strokeLinecap="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Business Structure */}
                        <div>
                            <label className="block mb-2" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px',
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
                                    className="w-full px-4 py-3 appearance-none cursor-pointer"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #CCCCCC',
                                        borderRadius: '8px',
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '16px',
                                        color: formData.businessStructure ? '#000000' : '#6B7280',
                                        outline: 'none',
                                        height: '56px',
                                        paddingRight: '48px'
                                    }}
                                    required
                                >
                                    <option value="">Business Structure</option>
                                    <option value="sole-proprietorship">Sole Proprietorship</option>
                                    <option value="partnership">Partnership</option>
                                    <option value="llc">LLC</option>
                                    <option value="corporation">Corporation</option>
                                </select>
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#3D6B3A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 5L7 9L11 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Product Categories */}
                        <div>
                            <label className="block mb-2" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px',
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
                                    className="w-full px-4 py-3 appearance-none cursor-pointer"
                                    style={{
                                        backgroundColor: '#FFFFFF',
                                        border: '1px solid #CCCCCC',
                                        borderRadius: '8px',
                                        fontFamily: 'DM Sans, sans-serif',
                                        fontSize: '16px',
                                        color: formData.productCategories ? '#000000' : '#6B7280',
                                        outline: 'none',
                                        height: '56px',
                                        paddingRight: '48px'
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
                                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 pointer-events-none" style={{ width: '24px', height: '24px', borderRadius: '50%', backgroundColor: '#3D6B3A', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                                        <path d="M3 5L7 9L11 5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>
                            </div>
                        </div>

                        {/* Product Types */}
                        <div>
                            <label className="block mb-2" style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '16px',
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
                                className="w-full px-4 py-3"
                                style={{
                                    backgroundColor: '#FFFFFF',
                                    border: '1px solid #CCCCCC',
                                    borderRadius: '8px',
                                    fontFamily: 'DM Sans, sans-serif',
                                    fontSize: '16px',
                                    color: '#6B7280',
                                    outline: 'none',
                                    height: '56px'
                                }}
                                required
                            />
                        </div>
                    </div>

                    {/* Checkbox */}
                    <div className="flex items-center justify-center gap-3 mb-8">
                        <input
                            type="checkbox"
                            name="agreeToTerms"
                            id="agreeToTerms"
                            checked={formData.agreeToTerms}
                            onChange={handleChange}
                            className="cursor-pointer"
                            style={{
                                width: '20px',
                                height: '20px',
                                accentColor: '#3D6B3A',
                                flexShrink: 0,
                                border: '2px solid #CCCCCC',
                                borderRadius: '4px'
                            }}
                            required
                        />
                        <label
                            htmlFor="agreeToTerms"
                            className="cursor-pointer"
                            style={{
                                fontFamily: 'DM Sans, sans-serif',
                                fontSize: '15px',
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
                                fontSize: '18px',
                                fontWeight: 600,
                                paddingLeft: '120px',
                                paddingRight: '120px',
                                paddingTop: '16px',
                                paddingBottom: '16px',
                                borderRadius: '12px',
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
