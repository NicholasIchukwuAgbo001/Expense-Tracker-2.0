"use client";

import Link from "next/link";
import { FaGithub, FaTwitter, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-6 py-10 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-10">
          <div>
            <h3 className="text-xl font-bold text-emerald-600 dark:text-emerald-400">
              ExpenseTracker
            </h3>
            <p className="mt-3 text-gray-600 dark:text-gray-400 text-sm leading-relaxed">
              Track your expenses, manage budgets, and gain insights into your
              financial health with ease.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/dashboard"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  Dashboard
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Resources
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/privacy"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  Terms of Service
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 dark:text-gray-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition"
                >
                  FAQs
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-4">
              Stay Updated
            </h4>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-3">
              Subscribe to our newsletter for tips and updates.
            </p>
            <form className="flex gap-2">
              <input
                type="email"
                placeholder="Your email"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-sm focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white rounded-lg text-sm font-medium transition"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

 
        <div className="pt-6 border-t border-gray-200 dark:border-gray-800">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left justify-center md:justify-between">

            <p className="text-gray-500 dark:text-gray-400 text-sm">
              © {new Date().getFullYear()} ExpenseTracker. All rights reserved.
            </p>

            <div className="flex items-center gap-5 text-gray-600 dark:text-gray-400 text-xl">
              <Link
                href="https://github.com/NicholasIchukwuAgbo001"
                target="_blank"
                className="hover:text-emerald-500 transition"
              >
                <FaGithub />
              </Link>
              <Link
                href="https://x.com/AgboIchukw36207"
                target="_blank"
                className="hover:text-emerald-500 transition"
              >
                <FaTwitter />
              </Link>
              <Link
                href="https://www.linkedin.com/in/ichukwu-nicholas-agbo-a43946363"
                target="_blank"
                className="hover:text-emerald-500 transition"
              >
                <FaLinkedin />
              </Link>
            </div>

            <div className="inline-flex items-center gap-2 bg-emerald-50/80 dark:bg-emerald-900/30 text-emerald-700 dark:text-emerald-300 px-3 py-1 rounded-full text-xs font-medium shadow-sm backdrop-blur-sm">
              <span className="w-1.5 h-1.5 bg-emerald-500 dark:bg-emerald-400 rounded-full animate-ping"></span>
              Made by Nicholas
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}