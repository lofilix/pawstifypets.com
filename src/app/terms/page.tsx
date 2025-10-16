import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Terms of Service - Pawstify',
  description: 'Read the Terms of Service for Pawstify\'s pet health management platform. Understand your rights and responsibilities when using our services.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-10 md:px-6 sm:px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Terms of Service
          </h1>
          <p className="text-lg text-gray-600 mt-2">
            Last updated: {new Date().toLocaleDateString('en-US', { 
              year: 'numeric', 
              month: 'long', 
              day: 'numeric' 
            })}
          </p>
        </div>
      </header>

      {/* Content */}
      <main className="py-12">
        <div className="max-w-4xl mx-auto px-10 md:px-6 sm:px-4">
          <div className="prose prose-lg max-w-none">
            
            <Section background="white" className="py-8">
              <div className="space-y-8">
                
                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Agreement to Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    By accessing and using Pawstify's website, services, or mobile application, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this site and our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Description of Service
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Pawstify is a pet health management platform that provides:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Digital pet health record management</li>
                    <li>Vaccination tracking and reminders</li>
                    <li>Medication and prescription management</li>
                    <li>Veterinary appointment scheduling</li>
                    <li>Health routine tracking and notifications</li>
                    <li>Educational resources about pet care</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    User Accounts and Registration
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To access certain features of our service, you may be required to create an account. You agree to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide accurate, current, and complete information</li>
                    <li>Maintain and update your account information</li>
                    <li>Keep your password secure and confidential</li>
                    <li>Accept responsibility for all activities under your account</li>
                    <li>Notify us immediately of any unauthorized use</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Acceptable Use Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You agree not to use Pawstify's services to:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Violate any applicable laws or regulations</li>
                    <li>Infringe on the rights of others</li>
                    <li>Upload malicious software or harmful content</li>
                    <li>Attempt to gain unauthorized access to our systems</li>
                    <li>Interfere with or disrupt our services</li>
                    <li>Use our platform for commercial purposes without permission</li>
                    <li>Share false or misleading information about pet health</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Content and Data Ownership
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Your Content:</strong> You retain ownership of all pet health information, photos, and other content you upload to Pawstify. By using our service, you grant us a limited license to store, process, and display your content solely for the purpose of providing our services.
                  </p>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Our Content:</strong> All Pawstify software, trademarks, and intellectual property remain our exclusive property. You may not copy, modify, or distribute our proprietary content.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Privacy and Data Protection
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your privacy is important to us. Please review our Privacy Policy, which explains how we collect, use, and protect your information. By using our services, you consent to the collection and use of information as described in our Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Medical Disclaimer
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    <strong>Important:</strong> Pawstify is not a substitute for professional veterinary care. Our platform is designed to help you organize and track your pet's health information, but it does not provide medical advice, diagnosis, or treatment recommendations.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Always consult with a licensed veterinarian for medical decisions</li>
                    <li>Seek immediate veterinary care for emergency situations</li>
                    <li>Do not rely solely on our reminders for critical health decisions</li>
                    <li>We are not responsible for any health outcomes based on platform usage</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Service Availability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    While we strive to maintain high service availability, we cannot guarantee uninterrupted access. We may perform maintenance, updates, or modifications that temporarily affect service availability. We reserve the right to modify or discontinue services with reasonable notice.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    To the maximum extent permitted by law, Pawstify shall not be liable for:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Any indirect, incidental, or consequential damages</li>
                    <li>Loss of data, profits, or business opportunities</li>
                    <li>Pet health outcomes or veterinary decisions</li>
                    <li>Third-party services or integrations</li>
                    <li>Force majeure events beyond our control</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    Our total liability shall not exceed the amount you paid for our services in the 12 months preceding the claim.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Indemnification
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    You agree to indemnify and hold harmless Pawstify, its officers, directors, employees, and agents from any claims, damages, or expenses arising from your use of our services, violation of these terms, or infringement of any rights of another party.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Termination
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    Either party may terminate this agreement at any time. Upon termination:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Your access to our services will cease</li>
                    <li>We will retain your data according to our Privacy Policy</li>
                    <li>You may request data deletion within 30 days</li>
                    <li>Provisions that should survive termination will remain in effect</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Governing Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms of Service are governed by and construed in accordance with the laws of [Your Jurisdiction]. Any disputes arising from these terms or your use of our services shall be resolved in the courts of [Your Jurisdiction].
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Changes to Terms
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We reserve the right to modify these Terms of Service at any time. We will notify users of material changes via email or through our platform. Your continued use of our services after changes constitutes acceptance of the new terms.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Severability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If any provision of these Terms of Service is found to be unenforceable or invalid, the remaining provisions will continue in full force and effect.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Contact Information
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about these Terms of Service, please contact us:
                  </p>
                  <div className="mt-4 p-6 bg-orange-50 rounded-2xl">
                    <p className="text-gray-700">
                      <strong>Email:</strong>{' '}
                      <a href="mailto:hellopawstify@gmail.com" className="text-orange-600 hover:text-orange-700 underline">
                        hellopawstify@gmail.com
                      </a>
                    </p>
                    <p className="text-gray-700 mt-2">
                      <strong>Website:</strong>{' '}
                      <a href="https://pawstifypets.com" className="text-orange-600 hover:text-orange-700 underline">
                        pawstifypets.com
                      </a>
                    </p>
                  </div>
                </div>

              </div>
            </Section>

          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-8 border-t border-gray-200 bg-gray-50">
        <div className="max-w-4xl mx-auto px-10 md:px-6 sm:px-4">
          <div className="text-center">
            <a 
              href="/" 
              className="inline-flex items-center text-orange-600 hover:text-orange-700 font-medium"
            >
              ← Back to Home
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
