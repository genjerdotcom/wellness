"use client";

import Link from "next/link";

export default function PackageTable({ packages, onDelete }: any) {
  return (
    <div className="overflow-hidden rounded-2xl border border-gray-100 bg-white">
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="border-b border-gray-100 bg-gray-50/70">
            <tr>
              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Package
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Price
              </th>

              <th className="px-6 py-4 text-left text-xs font-semibold uppercase tracking-wider text-gray-500">
                Duration
              </th>

              <th className="px-6 py-4 text-right text-xs font-semibold uppercase tracking-wider text-gray-500">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {packages.map((item: any) => (
              <tr
                key={item.id}
                className="border-b border-gray-100 transition-all hover:bg-gray-50/60"
              >
                <td className="px-6 py-5">
                  <div className="flex items-center gap-3">
                    <div>
                      <p className="font-medium text-gray-900">{item.name}</p>
                    </div>
                  </div>
                </td>

                <td className="px-6 py-5">
                  <span className="font-medium text-gray-900">
                    {new Intl.NumberFormat("id-ID", {
                      style: "currency",
                      currency: "IDR",
                      maximumFractionDigits: 0,
                    }).format(item.price)}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                    {item.duration_minutes >= 60
                      ? `${(item.duration_minutes / 60).toFixed(1)} hr`
                      : `${item.duration_minutes.toLocaleString("id-ID")} min`}
                  </span>
                </td>

                <td className="px-6 py-5">
                  <div className="flex justify-end gap-2">
                    <Link
                      href={`/edit/${item.id}`}
                      className="rounded-lg border border-gray-200 px-4 py-2 text-sm font-medium text-gray-700 transition hover:bg-gray-100"
                    >
                      Edit
                    </Link>

                    <button
                      onClick={() => onDelete(item.id)}
                      className="rounded-lg cursor-pointer px-4 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
                    >
                      Delete
                    </button>
                  </div>
                </td>
              </tr>
            ))}

            {packages.length === 0 && (
              <tr>
                <td colSpan={4} className="py-16 text-center">
                  <div className="space-y-2">
                    <p className="font-medium text-gray-700">
                      No packages found
                    </p>

                    <p className="text-sm text-gray-400">
                      Create your first package
                    </p>
                  </div>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
