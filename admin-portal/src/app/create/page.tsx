"use client";

import { useRouter } from "next/navigation";
import PackageForm from "@/components/PackageForm";
import { packageService } from "@/services/package.service";

export default function Create() {
  const router = useRouter();

  async function submit(data: any) {
    try {
      await packageService.create(data);

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div className="mx-auto">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 cursor-pointer rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
      >
        Back
      </button>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Create Package</h1>

          <p className="mt-2 text-sm text-gray-500">
            Add a new wellness package to your collection
          </p>
        </div>

        <div className="p-8">
          <PackageForm onSubmit={submit} />
        </div>
      </div>
    </div>
  );
}
