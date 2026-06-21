"use client";
import { useState, useEffect, useCallback } from "react";

interface Lead {
  id: string;
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
  preferredContact: string;
  status: string;
  submittedAt: string;
  updatedAt?: string;
}

type Tab = "all" | "new" | "read" | "contacted";

export default function AdminPage() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [activeTab, setActiveTab] = useState<Tab>("all");
  const [search, setSearch] = useState("");
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);
  const [updatingId, setUpdatingId] = useState<string | null>(null);

  const fetchLeads = useCallback(async (t: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/leads", {
        headers: { "x-admin-token": t },
      });
      if (res.status === 401) {
        setToken("");
        setError("Session expired. Please log in again.");
        return;
      }
      const data = await res.json();
      setLeads(data.leads || []);
    } catch {
      setError("Failed to fetch leads. Please refresh.");
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (token) fetchLeads(token);
  }, [token, fetchLeads]);

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");
    // Verify by trying to fetch leads
    try {
      const res = await fetch("/api/admin/leads", {
        headers: { "x-admin-token": password },
      });
      if (res.ok) {
        setToken(password);
      } else {
        setLoginError("Incorrect password. Please try again.");
      }
    } catch {
      setLoginError("Connection error. Please try again.");
    } finally {
      setIsLoggingIn(false);
    }
  };

  const updateStatus = async (id: string, status: string) => {
    setUpdatingId(id);
    try {
      const res = await fetch("/api/admin/leads", {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          "x-admin-token": token,
        },
        body: JSON.stringify({ id, status }),
      });
      if (res.ok) {
        setLeads((prev) =>
          prev.map((l) => (l.id === id ? { ...l, status } : l))
        );
      }
    } finally {
      setUpdatingId(null);
    }
  };

  const deleteLead = async (id: string) => {
    if (!confirm("Are you sure you want to delete this lead? This cannot be undone.")) return;
    setDeletingId(id);
    try {
      const res = await fetch(`/api/admin/delete-lead/${id}`, {
        method: "DELETE",
        headers: { "x-admin-token": token },
      });
      if (res.ok) {
        setLeads((prev) => prev.filter((l) => l.id !== id));
        if (expandedId === id) setExpandedId(null);
      }
    } finally {
      setDeletingId(null);
    }
  };

  const exportCSV = () => {
    const headers = ["Name", "Email", "Phone", "Company", "Service", "Message", "Preferred Contact", "Status", "Submitted At"];
    const rows = leads.map((l) => [
      l.name, l.email, l.phone, l.company, l.service,
      `"${(l.message || "").replace(/"/g, '""')}"`,
      l.preferredContact, l.status,
      new Date(l.submittedAt).toLocaleString("en-IN"),
    ]);
    const csv = [headers, ...rows].map((r) => r.join(",")).join("\n");
    const blob = new Blob([csv], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `octopustech-leads-${new Date().toISOString().split("T")[0]}.csv`;
    a.click();
    URL.revokeObjectURL(url);
  };

  const filtered = leads.filter((l) => {
    const matchesTab = activeTab === "all" || l.status === activeTab;
    const q = search.toLowerCase();
    const matchesSearch =
      !q ||
      l.name.toLowerCase().includes(q) ||
      l.email.toLowerCase().includes(q) ||
      l.phone.includes(q) ||
      (l.company || "").toLowerCase().includes(q) ||
      (l.service || "").toLowerCase().includes(q);
    return matchesTab && matchesSearch;
  });

  const counts = {
    all: leads.length,
    new: leads.filter((l) => l.status === "new").length,
    read: leads.filter((l) => l.status === "read").length,
    contacted: leads.filter((l) => l.status === "contacted").length,
  };

  // ============ LOGIN SCREEN ============
  if (!token) {
    return (
      <div
        className="min-h-screen flex items-center justify-center"
        style={{
          background: "linear-gradient(135deg, #0A1628 0%, #0E1F3D 100%)",
          fontFamily: "Inter, sans-serif",
        }}
      >
        {/* Grid bg */}
        <div
          className="fixed inset-0 opacity-5"
          style={{
            backgroundImage:
              "linear-gradient(rgba(30,111,255,0.8) 1px, transparent 1px), linear-gradient(90deg, rgba(30,111,255,0.8) 1px, transparent 1px)",
            backgroundSize: "40px 40px",
          }}
        />
        <div className="relative z-10 w-full max-w-md px-6">
          <div
            className="bg-white rounded-2xl shadow-2xl overflow-hidden"
            style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.4)" }}
          >
            {/* Header */}
            <div
              className="px-8 py-8 text-center"
              style={{ background: "linear-gradient(135deg, #0A1628, #0E1F3D)" }}
            >
              <div
                className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "#1E6FFF" }}
              >
                <svg viewBox="0 0 24 24" className="w-7 h-7 fill-white">
                  <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4z" />
                </svg>
              </div>
              <h1
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: "22px",
                  color: "white",
                  marginBottom: "6px",
                }}
              >
                Admin Panel
              </h1>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: "14px" }}>
                CargoSync · Leads Management
              </p>
            </div>

            {/* Form */}
            <div className="px-8 py-8">
              <form onSubmit={handleLogin} className="space-y-5">
                <div>
                  <label
                    style={{
                      display: "block",
                      fontSize: "13px",
                      fontFamily: "Syne, sans-serif",
                      fontWeight: 600,
                      color: "#0A1628",
                      marginBottom: "8px",
                    }}
                  >
                    Admin Password
                  </label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Enter your admin password"
                    className="form-input"
                    required
                    autoFocus
                  />
                </div>

                {loginError && (
                  <div
                    className="p-3 rounded-xl text-sm"
                    style={{
                      background: "#fef2f2",
                      border: "1px solid #fecaca",
                      color: "#dc2626",
                    }}
                  >
                    {loginError}
                  </div>
                )}

                <button
                  type="submit"
                  className="btn-primary w-full justify-center"
                  disabled={isLoggingIn}
                >
                  {isLoggingIn ? (
                    <>
                      <svg className="animate-spin w-4 h-4" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="white" strokeWidth="4" />
                        <path className="opacity-75" fill="white" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
                      </svg>
                      Verifying...
                    </>
                  ) : (
                    <>
                      <svg viewBox="0 0 20 20" className="w-4 h-4 fill-white">
                        <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                      </svg>
                      Sign In to Admin
                    </>
                  )}
                </button>
              </form>

              <p
                className="text-center mt-5"
                style={{ color: "#6B7A99", fontSize: "12px" }}
              >
                {/* Default password:{" "}
                <code
                  style={{
                    background: "#F0F4FF",
                    padding: "2px 6px",
                    borderRadius: "4px",
                    color: "#1E6FFF",
                    fontWeight: 600,
                  }}
                >
                  octopus2024
                </code> */}
                <br />
                <span style={{ fontSize: "11px" }}>
                  Set <code>ADMIN_PASSWORD</code> env var to change
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }

  // ============ ADMIN DASHBOARD ============
  return (
    <div
      className="min-h-screen"
      style={{ background: "#F0F4FF", fontFamily: "Inter, sans-serif" }}
    >
      {/* Top nav */}
      <div
        className="sticky top-0 z-50 shadow-sm"
        style={{ background: "#0A1628" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex flex-col sm:flex-row gap-4 sm:gap-0 items-start sm:items-center justify-between">
          <div className="flex flex-wrap items-center gap-2 w-full sm:w-auto">
            <div
              className="w-8 h-8 rounded-lg flex items-center justify-center"
              style={{ background: "#1E6FFF" }}
            >
              <svg viewBox="0 0 24 24" className="w-4 h-4 fill-white">
                <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm0 3c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm-4 7c0-1.1.9-2 2-2h4c1.1 0 2 .9 2 2v5H8v-5z" />
              </svg>
            </div>
            <span
              style={{
                fontFamily: "Syne, sans-serif",
                fontWeight: 800,
                fontSize: "18px",
                color: "white",
              }}
            >
              Cargo<span style={{ color: "#1E6FFF" }}>Sync</span>{" "}
              <span style={{ color: "rgba(255,255,255,0.4)", fontWeight: 400 }}>
                Admin
              </span>
            </span>
            <a
              href="/admin/quotes"
              style={{
                fontSize: "13px",
                color: "rgba(255,255,255,0.6)",
                fontFamily: "Inter, sans-serif",
                textDecoration: "none",
                borderLeft: "1px solid rgba(255,255,255,0.15)",
                paddingLeft: "12px",
              }}
            >
              Quote Requests →
            </a>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => fetchLeads(token)}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
              style={{
                background: "rgba(255,255,255,0.08)",
                color: "rgba(255,255,255,0.7)",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
              </svg>
              Refresh
            </button>
            <button
              onClick={exportCSV}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
              style={{
                background: "rgba(30,111,255,0.2)",
                color: "#4D91FF",
                border: "1px solid rgba(30,111,255,0.3)",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path fillRule="evenodd" d="M3 17a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zm3.293-7.707a1 1 0 011.414 0L9 10.586V3a1 1 0 112 0v7.586l1.293-1.293a1 1 0 111.414 1.414l-3 3a1 1 0 01-1.414 0l-3-3a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
              Export CSV
            </button>
            <button
              onClick={() => setToken("")}
              className="flex items-center gap-2 px-3 py-2 rounded-lg text-sm"
              style={{
                background: "rgba(255,255,255,0.06)",
                color: "rgba(255,255,255,0.5)",
                border: "none",
                cursor: "pointer",
                fontFamily: "Inter, sans-serif",
              }}
            >
              <svg viewBox="0 0 20 20" className="w-4 h-4 fill-current">
                <path fillRule="evenodd" d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z" clipRule="evenodd" />
              </svg>
              Logout
            </button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-6 sm:py-8">
        {/* Stats row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {[
            { label: "Total Leads", value: counts.all, color: "#1E6FFF", bg: "#EFF6FF" },
            { label: "New", value: counts.new, color: "#d97706", bg: "#fffbeb" },
            { label: "Read", value: counts.read, color: "#0891b2", bg: "#ecfeff" },
            { label: "Contacted", value: counts.contacted, color: "#16a34a", bg: "#f0fdf4" },
          ].map((s) => (
            <div
              key={s.label}
              className="bg-white rounded-2xl p-4 sm:p-5"
              style={{ border: "1.5px solid #C8D8FF" }}
            >
              <div
                style={{
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 800,
                  fontSize: window.innerWidth < 640 ? "28px" : "36px",
                  color: s.color,
                  lineHeight: 1,
                  marginBottom: "6px",
                }}
              >
                {s.value}
              </div>
              <div
                style={{
                  fontSize: "13px",
                  color: "#6B7A99",
                  fontFamily: "Inter, sans-serif",
                  fontWeight: 500,
                }}
              >
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* Filters + Search */}
        <div className="flex flex-col lg:flex-row gap-4 mb-6">
          <div className="flex flex-wrap gap-2 w-full lg:w-auto">
            {(["all", "new", "read", "contacted"] as Tab[]).map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                style={{
                  padding: "8px 12px",
                  borderRadius: "99px",
                  border: "1.5px solid",
                  borderColor: activeTab === tab ? "#1E6FFF" : "#C8D8FF",
                  background: activeTab === tab ? "#1E6FFF" : "white",
                  color: activeTab === tab ? "white" : "#6B7A99",
                  fontFamily: "Syne, sans-serif",
                  fontWeight: 600,
                  fontSize: "13px",
                  cursor: "pointer",
                  textTransform: "capitalize",
                }}
              >
                {tab} {tab !== "all" && `(${counts[tab]})`}
              </button>
            ))}
          </div>
          <div className="flex-1 relative">
            <svg
              viewBox="0 0 20 20"
              className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 fill-current"
              style={{ color: "#6B7A99" }}
            >
              <path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd" />
            </svg>
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search by name, email, phone, service..."
              className="form-input"
              style={{ paddingLeft: "36px" }}
            />
          </div>
        </div>

        {/* Error */}
        {error && (
          <div
            className="p-4 rounded-xl mb-6"
            style={{
              background: "#fef2f2",
              border: "1px solid #fecaca",
              color: "#dc2626",
              fontFamily: "Inter, sans-serif",
              fontSize: "14px",
            }}
          >
            {error}
          </div>
        )}

        {/* Table */}
        <div
          className="bg-white rounded-2xl overflow-hidden"
          style={{ border: "1.5px solid #C8D8FF" }}
        >
          {loading ? (
            <div className="py-20 text-center">
              <svg className="animate-spin w-8 h-8 mx-auto" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="#1E6FFF" strokeWidth="4" />
                <path className="opacity-75" fill="#1E6FFF" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
              </svg>
              <p style={{ color: "#6B7A99", marginTop: "12px", fontFamily: "Inter, sans-serif" }}>
                Loading leads...
              </p>
            </div>
          ) : filtered.length === 0 ? (
            <div className="py-20 text-center">
              <div
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ background: "#F0F4FF" }}
              >
                <svg viewBox="0 0 24 24" className="w-8 h-8" fill="none" stroke="#6B7A99" strokeWidth="1.5">
                  <path d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
                </svg>
              </div>
              <p style={{ fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "18px", color: "#0A1628", marginBottom: "8px" }}>
                No leads found
              </p>
              <p style={{ color: "#6B7A99", fontFamily: "Inter, sans-serif", fontSize: "14px" }}>
                {search ? "Try a different search term." : "No enquiries submitted yet."}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto w-full">
              <table className="admin-table min-w-[900px] w-full">
                <thead>
                  <tr>
                    <th>Name / Company</th>
                    <th>Contact</th>
                    <th>Service</th>
                    <th>Via</th>
                    <th>Received</th>
                    <th>Status</th>
                    <th>Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((lead) => (
                    <>
                      <tr
                        key={lead.id}
                        style={{ cursor: "pointer" }}
                        onClick={() =>
                          setExpandedId(
                            expandedId === lead.id ? null : lead.id
                          )
                        }
                      >
                        <td>
                          <div style={{ fontWeight: 600, color: "#0A1628", fontSize: "14px" }}>
                            {lead.name}
                          </div>
                          {lead.company && (
                            <div style={{ color: "#6B7A99", fontSize: "12px", marginTop: "2px" }}>
                              {lead.company}
                            </div>
                          )}
                        </td>
                        <td>
                          <a
                            href={`mailto:${lead.email}`}
                            onClick={(e) => e.stopPropagation()}
                            style={{ color: "#1E6FFF", textDecoration: "none", fontSize: "13px", display: "block" }}
                          >
                            {lead.email}
                          </a>
                          <a
                            href={`tel:${lead.phone}`}
                            onClick={(e) => e.stopPropagation()}
                            style={{ color: "#6B7A99", textDecoration: "none", fontSize: "13px", display: "block", marginTop: "2px" }}
                          >
                            {lead.phone}
                          </a>
                        </td>
                        <td>
                          <span style={{ fontSize: "13px", color: "#0A1628" }}>
                            {lead.service || "-"}
                          </span>
                        </td>
                        <td>
                          <span
                            style={{
                              fontSize: "12px",
                              background: "#F0F4FF",
                              color: "#1E6FFF",
                              padding: "2px 8px",
                              borderRadius: "99px",
                              fontFamily: "Syne, sans-serif",
                              fontWeight: 600,
                              textTransform: "capitalize",
                            }}
                          >
                            {lead.preferredContact}
                          </span>
                        </td>
                        <td>
                          <div style={{ fontSize: "13px", color: "#0A1628" }}>
                            {new Date(lead.submittedAt).toLocaleDateString("en-IN", {
                              day: "numeric",
                              month: "short",
                              year: "numeric",
                            })}
                          </div>
                          <div style={{ fontSize: "11px", color: "#6B7A99", marginTop: "2px" }}>
                            {new Date(lead.submittedAt).toLocaleTimeString("en-IN", {
                              hour: "2-digit",
                              minute: "2-digit",
                            })}
                          </div>
                        </td>
                        <td onClick={(e) => e.stopPropagation()}>
                          <select
                            value={lead.status}
                            onChange={(e) => updateStatus(lead.id, e.target.value)}
                            disabled={updatingId === lead.id}
                            style={{
                              padding: "5px 10px",
                              borderRadius: "8px",
                              border: "1.5px solid #C8D8FF",
                              fontSize: "13px",
                              fontFamily: "Syne, sans-serif",
                              fontWeight: 600,
                              color:
                                lead.status === "new"
                                  ? "#d97706"
                                  : lead.status === "read"
                                  ? "#0891b2"
                                  : "#16a34a",
                              background: "white",
                              cursor: "pointer",
                            }}
                          >
                            <option value="new">New</option>
                            <option value="read">Read</option>
                            <option value="contacted">Contacted</option>
                          </select>
                        </td>
                        <td onClick={(e) => e.stopPropagation()}>
                          <div className="flex flex-wrap items-center gap-2">
                            <button
                              onClick={() => setExpandedId(expandedId === lead.id ? null : lead.id)}
                              style={{
                                padding: "6px 10px",
                                background: "#F0F4FF",
                                border: "1px solid #C8D8FF",
                                borderRadius: "8px",
                                color: "#1E6FFF",
                                fontSize: "12px",
                                fontFamily: "Syne, sans-serif",
                                fontWeight: 600,
                                cursor: "pointer",
                              }}
                            >
                              {expandedId === lead.id ? "Hide" : "View"}
                            </button>
                            <button
                              onClick={() => deleteLead(lead.id)}
                              disabled={deletingId === lead.id}
                              style={{
                                padding: "6px 10px",
                                background: "#fef2f2",
                                border: "1px solid #fecaca",
                                borderRadius: "8px",
                                color: "#dc2626",
                                fontSize: "12px",
                                fontFamily: "Syne, sans-serif",
                                fontWeight: 600,
                                cursor: "pointer",
                              }}
                            >
                              {deletingId === lead.id ? "..." : "Delete"}
                            </button>
                          </div>
                        </td>
                      </tr>

                      {/* Expanded detail row */}
                      {expandedId === lead.id && (
                        <tr key={`${lead.id}-expanded`}>
                          <td
                            colSpan={7}
                            style={{ padding: 0 }}
                            onClick={(e) => e.stopPropagation()}
                          >
                            <div
                              style={{
                                background: "#F8FAFF",
                                borderTop: "1px solid #C8D8FF",
                                borderBottom: "1px solid #C8D8FF",
                                padding: window.innerWidth < 640 ? "16px" : "20px 24px"
                              }}
                            >
                              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <div>
                                  <div
                                    style={{
                                      fontSize: "11px",
                                      fontFamily: "Syne, sans-serif",
                                      fontWeight: 700,
                                      color: "#6B7A99",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.08em",
                                      marginBottom: "8px",
                                    }}
                                  >
                                    Lead Details
                                  </div>
                                  <div style={{ fontSize: "13px", color: "#0A1628", lineHeight: 2 }}>
                                    <strong>ID:</strong>{" "}
                                    <code style={{ fontSize: "11px", color: "#6B7A99" }}>
                                      {lead.id}
                                    </code>
                                    <br />
                                    <strong>Name:</strong> {lead.name}
                                    <br />
                                    <strong>Email:</strong>{" "}
                                    <a
                                      href={`mailto:${lead.email}`}
                                      style={{ color: "#1E6FFF" }}
                                    >
                                      {lead.email}
                                    </a>
                                    <br />
                                    <strong>Phone:</strong>{" "}
                                    <a
                                      href={`tel:${lead.phone}`}
                                      style={{ color: "#1E6FFF" }}
                                    >
                                      {lead.phone}
                                    </a>
                                    <br />
                                    {lead.company && (
                                      <>
                                        <strong>Company:</strong> {lead.company}
                                        <br />
                                      </>
                                    )}
                                    <strong>Service:</strong>{" "}
                                    {lead.service || "Not specified"}
                                    <br />
                                    <strong>Contact Via:</strong>{" "}
                                    {lead.preferredContact}
                                  </div>
                                </div>
                                <div className="md:col-span-2">
                                  <div
                                    style={{
                                      fontSize: "11px",
                                      fontFamily: "Syne, sans-serif",
                                      fontWeight: 700,
                                      color: "#6B7A99",
                                      textTransform: "uppercase",
                                      letterSpacing: "0.08em",
                                      marginBottom: "8px",
                                    }}
                                  >
                                    Message
                                  </div>
                                  <div
                                    style={{
                                      background: "white",
                                      border: "1.5px solid #C8D8FF",
                                      borderRadius: "12px",
                                      padding: "16px",
                                      fontSize: "14px",
                                      color: lead.message ? "#0A1628" : "#6B7A99",
                                      lineHeight: 1.7,
                                      fontFamily: "Inter, sans-serif",
                                      minHeight: "80px",
                                    }}
                                  >
                                    {lead.message || "No message provided."}
                                  </div>
                                  <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                    <a
                                      href={`mailto:${lead.email}?subject=Re: Your Enquiry - CargoSync&body=Hi ${lead.name},%0A%0AThank you for reaching out to CargoSync.`}
                                      className="btn-primary"
                                      style={{
                                        textDecoration: "none",
                                        padding: "8px 16px",
                                        fontSize: "13px",
                                      }}
                                      onClick={() => updateStatus(lead.id, "contacted")}
                                    >
                                      Reply by Email
                                    </a>
                                    <a
                                      href={`tel:${lead.phone}`}
                                      style={{
                                        display: "inline-flex",
                                        alignItems: "center",
                                        gap: "6px",
                                        padding: "8px 16px",
                                        borderRadius: "8px",
                                        border: "1.5px solid #C8D8FF",
                                        color: "#0A1628",
                                        textDecoration: "none",
                                        fontSize: "13px",
                                        fontFamily: "Syne, sans-serif",
                                        fontWeight: 600,
                                        background: "white",
                                      }}
                                      onClick={() => updateStatus(lead.id, "contacted")}
                                    >
                                      📞 Call Back
                                    </a>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </td>
                        </tr>
                      )}
                    </>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>

        {filtered.length > 0 && (
          <p
            className="text-center mt-4"
            style={{ color: "#6B7A99", fontSize: "13px", fontFamily: "Inter, sans-serif" }}
          >
            Showing {filtered.length} of {leads.length} leads
          </p>
        )}
      </div>
    </div>
  );
}
