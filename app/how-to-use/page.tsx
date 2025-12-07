"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function HowToUsePage() {
  return (
    <div className="section bg-gradient-subtle">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
              How to Use Recipe Bookkeeper
            </h1>
            <p className="text-xl text-gray-600">
              Get started in just a few simple steps
            </p>
          </div>
          
          {/* Steps */}
          <div className="space-y-6">
            
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              1
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">Search for a recipe</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              Generate a grocery list or meal plan
            </h3>
            <p className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              Search for a recipe
            </p>
            <p className="text-gray-600 mb-2">
              Display a list of matching recipes
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Recipe search bar
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              2
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">Select a recipe to view details</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              Select a recipe to view details
            </h3>
            <p className="text-gray-600 mb-2">
              Display the selected recipe's details, including variations and substitutions
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Recipe thumbnail and title
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">Add new ingredients or cooking methods</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              Add new ingredients or cooking methods
            </h3>
            <p className="text-gray-600 mb-2">
              Update the recipe with new information
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Input fields for ingredients and cooking methods
            </p>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
          <div className="flex-shrink-0 flex sm:block items-center gap-4">
            <div className="w-10 h-10 sm:w-12 sm:h-12 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
              4
            </div>
            <span className="sm:hidden text-lg font-semibold text-gray-900">Generate a grocery list or meal plan</span>
          </div>
          <div className="card flex-1">
            <h3 className="hidden sm:block text-xl font-semibold text-gray-900 mb-2">
              Generate a grocery list or meal plan
            </h3>
            <p className="text-gray-600 mb-2">
              Display a generated grocery list or meal plan based on selected recipes
            </p>
            <p className="text-sm text-gray-500">
              UI Element: Button to generate a grocery list or meal plan
            </p>
          </div>
        </div>

          </div>
          
          {/* CTA */}
          <div className="mt-12 text-center">
            <Link href="/" className="btn-primary inline-flex items-center gap-2">
              Try It Now
              <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
