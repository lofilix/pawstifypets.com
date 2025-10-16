import type { Metadata } from 'next'
import { Section } from '@/components/ui/Section'

export const metadata: Metadata = {
  title: 'Privacy Policy - Pawstify',
  description: 'Learn how Pawstify protects your privacy and handles your personal information when you use our pet health management platform.',
  robots: {
    index: true,
    follow: true,
  },
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="py-8 border-b border-gray-200">
        <div className="max-w-4xl mx-auto px-10 md:px-6 sm:px-4">
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900">
            Privacy Policy
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
                    Introduction
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    At Pawstify, we are committed to protecting your privacy and ensuring the security of your personal information. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website, use our pet health management platform, or interact with our services.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Information We Collect
                  </h2>
                  
                  <h3 className="text-xl font-medium text-gray-900 mb-3">
                    Information You Provide Directly
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Email Address:</strong> When you sign up for our demo or newsletter</li>
                    <li><strong>Pet Information:</strong> Pet names, breeds, ages, and health records you choose to share</li>
                    <li><strong>Veterinary Information:</strong> Vet contact details and appointment records</li>
                    <li><strong>Communication:</strong> Messages you send us through contact forms or support channels</li>
                  </ul>

                  <h3 className="text-xl font-medium text-gray-900 mb-3 mt-6">
                    Information We Collect Automatically
                  </h3>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Usage Data:</strong> How you interact with our website and app</li>
                    <li><strong>Device Information:</strong> Device type, operating system, and browser information</li>
                    <li><strong>Analytics Data:</strong> Website performance and user behavior analytics</li>
                    <li><strong>Cookies:</strong> Essential cookies for website functionality and optional analytics cookies</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    How We Use Your Information
                  </h2>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li>Provide and maintain our pet health management services</li>
                    <li>Send you demo invitations and product updates</li>
                    <li>Process your requests and provide customer support</li>
                    <li>Improve our website and app functionality</li>
                    <li>Comply with legal obligations and protect our rights</li>
                    <li>Prevent fraud and ensure platform security</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Information Sharing and Disclosure
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We do not sell, trade, or rent your personal information to third parties. We may share your information only in the following circumstances:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Service Providers:</strong> Trusted third-party vendors who help us operate our platform</li>
                    <li><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</li>
                    <li><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</li>
                    <li><strong>Consent:</strong> When you explicitly consent to sharing your information</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Data Security
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We implement industry-standard security measures to protect your personal information, including encryption, secure servers, and regular security audits. However, no method of transmission over the internet is 100% secure, and we cannot guarantee absolute security.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Your Rights and Choices
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    You have the following rights regarding your personal information:
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Access:</strong> Request a copy of the personal information we have about you</li>
                    <li><strong>Correction:</strong> Update or correct inaccurate information</li>
                    <li><strong>Deletion:</strong> Request deletion of your personal information</li>
                    <li><strong>Portability:</strong> Request transfer of your data to another service</li>
                    <li><strong>Opt-out:</strong> Unsubscribe from marketing communications</li>
                  </ul>
                  <p className="text-gray-700 leading-relaxed mt-4">
                    To exercise these rights, please contact us at{' '}
                    <a href="mailto:hellopawstify@gmail.com" className="text-orange-600 hover:text-orange-700 underline">
                      hellopawstify@gmail.com
                    </a>
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Cookies and Tracking
                  </h2>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    We use cookies and similar technologies to enhance your experience on our website. You can control cookie settings through your browser preferences.
                  </p>
                  <ul className="list-disc pl-6 text-gray-700 space-y-2">
                    <li><strong>Essential Cookies:</strong> Required for website functionality</li>
                    <li><strong>Analytics Cookies:</strong> Help us understand website usage (optional)</li>
                    <li><strong>Preference Cookies:</strong> Remember your settings and preferences</li>
                  </ul>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Children's Privacy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Our services are not intended for children under 13 years of age. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us immediately.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    International Data Transfers
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Your information may be transferred to and processed in countries other than your own. We ensure appropriate safeguards are in place to protect your information in accordance with this Privacy Policy.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Changes to This Privacy Policy
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date. We encourage you to review this Privacy Policy periodically.
                  </p>
                </div>

                <div>
                  <h2 className="text-2xl font-semibold text-gray-900 mb-4">
                    Contact Us
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    If you have any questions about this Privacy Policy or our privacy practices, please contact us:
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
