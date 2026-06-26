"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import PackageTable from "@/components/PackageTable";
import { packageService } from "@/services/package.service";

export default function Home() {
  const [packages, setPackages] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  async function load() {
    try {
      setLoading(true);

      const data = await packageService.getAll();

      setPackages(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function remove(id: string) {
    try {
      await packageService.delete(id);

      load();
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div className="space-y-6">
      <div className="flex flex-col items-start justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">
            Wellness Packages
          </h1>

          <p className="mt-1 text-sm text-gray-500">
            Manage and organize your package list
          </p>
        </div>

        <Link
          href="/create"
          className="rounded-lg px-5 py-3 text-sm font-medium transition hover:opacity-90"
        >
          + Create Package
        </Link>
      </div>

      <div className="rounded-2xl border border-gray-200 bg-white shadow-sm">
        {loading ? (
          <div className="flex justify-center py-10">
            <p className="animate-pulse text-gray-500">Loading packages...</p>
          </div>
        ) : (
          <PackageTable packages={packages} onDelete={remove} />
        )}
      </div>
    </div>
  );
}
