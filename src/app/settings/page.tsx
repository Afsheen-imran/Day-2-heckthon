"use client"

import { useState } from "react"

export default function SettingsPage() {
  const [settings, setSettings] = useState({
    notifications: {
      email: true,
      push: false,
      sms: true,
    },
    privacy: {
      profileVisibility: "public",
      activityStatus: true,
    },
    preferences: {
      language: "english",
      currency: "usd",
      theme: "light",
    },
  })

  const handleNotificationChange = (type: keyof typeof settings.notifications) => {
    setSettings((prev) => ({
      ...prev,
      notifications: {
        ...prev.notifications,
        [type]: !prev.notifications[type],
      },
    }))
  }

  const handlePrivacyChange = (setting: string, value: string | boolean) => {
    setSettings((prev) => ({
      ...prev,
      privacy: {
        ...prev.privacy,
        [setting]: value,
      },
    }))
  }

  const handlePreferenceChange = (setting: string, value: string) => {
    setSettings((prev) => ({
      ...prev,
      preferences: {
        ...prev.preferences,
        [setting]: value,
      },
    }))
  }

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-2xl font-bold text-gray-900 dark:text-white mb-8">Settings</h1>

        <div className="space-y-6">
          {/* Notifications */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Notifications</h2>
            </div>
            <div className="p-6 space-y-4">
              {Object.entries(settings.notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium text-gray-900 dark:text-white capitalize">{key} Notifications</p>
                    <p className="text-sm text-gray-500 dark:text-gray-400">Receive notifications via {key}</p>
                  </div>
                  <button
                    onClick={() => handleNotificationChange(key as keyof typeof settings.notifications)}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? "bg-[#ff6b6b]" : "bg-gray-200 dark:bg-gray-700"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </div>

          {/* Privacy */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Privacy</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block font-medium text-gray-900 dark:text-white mb-2">Profile Visibility</label>
                <select
                  value={settings.privacy.profileVisibility}
                  onChange={(e) => handlePrivacyChange("profileVisibility", e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff6b6b] focus:ring-[#ff6b6b] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="public">Public</option>
                  <option value="private">Private</option>
                  <option value="friends">Friends Only</option>
                </select>
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium text-gray-900 dark:text-white">Activity Status</p>
                  <p className="text-sm text-gray-500 dark:text-gray-400">Show when you&apos;re active</p>
                </div>
                <button
                  onClick={() => handlePrivacyChange("activityStatus", !settings.privacy.activityStatus)}
                  className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                    settings.privacy.activityStatus ? "bg-[#ff6b6b]" : "bg-gray-200 dark:bg-gray-700"
                  }`}
                >
                  <span
                    className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                      settings.privacy.activityStatus ? "translate-x-6" : "translate-x-1"
                    }`}
                  />
                </button>
              </div>
            </div>
          </div>

          {/* Preferences */}
          <div className="bg-white dark:bg-gray-800 rounded-lg shadow-sm">
            <div className="p-6 border-b border-gray-200 dark:border-gray-700">
              <h2 className="text-lg font-semibold text-gray-900 dark:text-white">Preferences</h2>
            </div>
            <div className="p-6 space-y-4">
              <div>
                <label className="block font-medium text-gray-900 dark:text-white mb-2">Language</label>
                <select
                  value={settings.preferences.language}
                  onChange={(e) => handlePreferenceChange("language", e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff6b6b] focus:ring-[#ff6b6b] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="english">English</option>
                  <option value="spanish">Spanish</option>
                  <option value="french">French</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-900 dark:text-white mb-2">Currency</label>
                <select
                  value={settings.preferences.currency}
                  onChange={(e) => handlePreferenceChange("currency", e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff6b6b] focus:ring-[#ff6b6b] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="usd">USD ($)</option>
                  <option value="eur">EUR (€)</option>
                  <option value="gbp">GBP (£)</option>
                </select>
              </div>
              <div>
                <label className="block font-medium text-gray-900 dark:text-white mb-2">Theme</label>
                <select
                  value={settings.preferences.theme}
                  onChange={(e) => handlePreferenceChange("theme", e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-[#ff6b6b] focus:ring-[#ff6b6b] dark:bg-gray-700 dark:border-gray-600 dark:text-white"
                >
                  <option value="light">Light</option>
                  <option value="dark">Dark</option>
                  <option value="system">System</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

