"use client";

import { useState } from "react";

export default function PackageForm({ initialData, onSubmit }: any) {
  const [form, setForm] = useState(
    initialData || {
      name: "",
      description: "",
      price: "",
      duration_minutes: "",
    },
  );

  const [errors, setErrors] = useState<any>({});

  function validate() {
    const newErrors: any = {};

    if (!form.name.trim()) {
      newErrors.name = "Package name is required";
    }

    if (!form.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!form.price) {
      newErrors.price = "Price is required";
    }

    if (!form.duration_minutes) {
      newErrors.duration_minutes = "Duration is required";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit() {
    if (!validate()) return;

    onSubmit({
      ...form,
      price: Number(form.price),
      duration_minutes: Number(form.duration_minutes),
    });
  }

  return (
    <div className="space-y-6">
      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Package Name *
        </label>

        <input
          required
          type="text"
          placeholder="Premium Package"
          value={form.name}
          onChange={(e) =>
            setForm({
              ...form,
              name: e.target.value,
            })
          }
          className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
            errors.name
              ? "border-red-300"
              : "border-gray-200 focus:border-gray-400"
          }`}
        />

        {errors.name && (
          <p className="mt-1 text-sm text-red-500">{errors.name}</p>
        )}
      </div>

      <div>
        <label className="mb-2 block text-sm font-medium text-gray-700">
          Description *
        </label>

        <textarea
          required
          rows={4}
          placeholder="Write package description..."
          value={form.description}
          onChange={(e) =>
            setForm({
              ...form,
              description: e.target.value,
            })
          }
          className={`w-full resize-none rounded-xl border px-4 py-3 outline-none transition ${
            errors.description
              ? "border-red-300"
              : "border-gray-200 focus:border-gray-400"
          }`}
        />

        {errors.description && (
          <p className="mt-1 text-sm text-red-500">{errors.description}</p>
        )}
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Price *
          </label>

          <input
            required
            type="number"
            placeholder="100000"
            value={form.price}
            onChange={(e) =>
              setForm({
                ...form,
                price: e.target.value,
              })
            }
            className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
              errors.price
                ? "border-red-300"
                : "border-gray-200 focus:border-gray-400"
            }`}
          />

          {errors.price && (
            <p className="mt-1 text-sm text-red-500">{errors.price}</p>
          )}
        </div>

        <div>
          <label className="mb-2 block text-sm font-medium text-gray-700">
            Duration *
          </label>

          <input
            required
            type="number"
            placeholder="60"
            value={form.duration_minutes}
            onChange={(e) =>
              setForm({
                ...form,
                duration_minutes: e.target.value,
              })
            }
            className={`w-full rounded-xl border px-4 py-3 outline-none transition ${
              errors.duration_minutes
                ? "border-red-300"
                : "border-gray-200 focus:border-gray-400"
            }`}
          />

          {errors.duration_minutes && (
            <p className="mt-1 text-sm text-red-500">
              {errors.duration_minutes}
            </p>
          )}
        </div>
      </div>

      <div className="flex justify-end pt-4">
        <button
          onClick={handleSubmit}
          className="rounded-lg bg-black px-6 py-3 text-sm font-medium text-white transition hover:opacity-90"
        >
          Save Package
        </button>
      </div>
    </div>
  );
}
