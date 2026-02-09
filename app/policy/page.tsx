import ContactInfo from '@/components/policy/ContactInfo';
import CookiesPolicy from '@/components/policy/CookiesPolicy';
import DataProtection from '@/components/policy/DataProtection';
import Disclaimer from '@/components/policy/Disclaimer';
import IntellectualProperty from '@/components/policy/IntellectualProperty';
import LimitationOfLiability from '@/components/policy/LimitationOfLiability';
import PolicyOverview from '@/components/policy/PolicyOverview';
import PolicyUpdates from '@/components/policy/PolicyUpdates';
import PrivacyPolicy from '@/components/policy/PrivacyPolicy';
import ResponsibleDisclosure from '@/components/policy/ResponsibleDisclosure';
import ThirdPartyLinks from '@/components/policy/ThirdPartyLinks';
import UserResponsibilities from '@/components/policy/UserResponsibilities';
import React from 'react';
export const metadata = {
    title: "Policy | ZER0DAYTEST",
    description: "Learn more about Abdullah Sifat's journey and expertise in Graphic Design.",
};

const page = () => {
    return (
        <div>
            {/* Policy Page section 1 */}
            <PolicyOverview/>
            {/* Disclaimer section 2 */}
            <Disclaimer/>
            {/* Privacy Policy section 3 */}
            <PrivacyPolicy/>
            {/* Data Protection & Security section 4 */}
            <DataProtection/>
            {/* Cookies Policy section 5 */}
            <CookiesPolicy/>
            {/* Responsible Disclosure Policy section 6 */}
            <ResponsibleDisclosure/>
            {/* User Responsibilities section 7 */}
            <UserResponsibilities/>
            {/* Intellectual Property section 8 */}
            <IntellectualProperty/>
            {/* Third-party Links */}
            <ThirdPartyLinks/>
            {/* Limitation of Liability section 9 */}
            <LimitationOfLiability/>
            {/* Policy Updates section 10 */}
            <PolicyUpdates/>
            {/* Contact Information section 11 */}
            <ContactInfo/>
        </div>
    );
};

export default page;