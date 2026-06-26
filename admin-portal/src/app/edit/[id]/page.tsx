"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import PackageForm from "@/components/PackageForm";
import { packageService } from "@/services/package.service";

export default function Edit() {
  const { id } = useParams();
  const router = useRouter();

  const [data, setData] = useState<any>(null);

  useEffect(() => {
    async function load() {
      try {
        const packages = await packageService.getAll();

        const selected = packages.find((p: any) => p.id.toString() === id);

        setData(selected);
      } catch (error) {
        console.error(error);
      }
    }

    load();
  }, [id]);

  async function submit(form: any) {
    try {
      await packageService.update(id as string, form);

      router.push("/");
    } catch (error) {
      console.error(error);
    }
  }

  if (!data) {
    return (
      <div className="flex items-center justify-center py-20">
        <div className="rounded-2xl border border-gray-100 bg-white px-6 py-4 shadow-sm">
          <p className="animate-pulse text-sm text-gray-500">
            Loading package...
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="mx-auto">
      <button
        onClick={() => router.back()}
        className="inline-flex items-center gap-2 rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm font-medium text-gray-600 transition hover:bg-gray-50"
      >
        Back
      </button>

      <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="border-b border-gray-100 px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900">Edit Package</h1>

          <p className="mt-2 text-sm text-gray-500">
            Update package information
          </p>
        </div>

        <div className="p-8">
          <PackageForm initialData={data} onSubmit={submit} />
        </div>
      </div>
    </div>
  );
}
