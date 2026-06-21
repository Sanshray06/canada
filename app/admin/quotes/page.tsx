"use client";
import { useEffect, useState } from "react";
import { services as serviceCatalog } from "@/lib/service-data";

interface Quote {
  id: string;
  created_at: string;
  name: string;
  email: string;
  phone: string;
  company: string | null;
  services: string[];
  trucks: number;
  term: string;
  monthly_total: number;
  contract_total: number;
  discount_pct: number | null;
  message: string | null;
}

const termLabels: Record<string, string> = {
  monthly: "Month-to-Month",
  "1year": "1 Year",
  "2year": "2 Years",
  "3year": "3+ Years",
};

function formatUSD(n: number) {
  return n.toLocaleString("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 });
}

function serviceTitle(slug: string) {
  return serviceCatalog.find((s) => s.slug === slug)?.title || slug;
}

export default function AdminQuotesPage() {
  const [password, setPassword] = useState("");
  const [token, setToken] = useState("");
  const [loginError, setLoginError] = useState("");
  const [isLoggingIn, setIsLoggingIn] = useState(false);

  const [quotes, setQuotes] = useState<Quote[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [deletingId, setDeletingId] = useState<string | null>(null);

  useEffect(() => {
    if (token) fetchQuotes(token);
  }, [token]);

  const fetchQuotes = async (t: string) => {
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/api/admin/quotes", { headers: { "x-admin-token": t } });
      if (res.status === 401) {
        setToken("");
        setLoginError("Session expired. Please log in again.");
        return;
      }
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to load quotes.");
      setQuotes(data.quotes || []);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Failed to load quotes.");
    } finally {
      setLoading(false);
    }
  };

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoggingIn(true);
    setLoginError("");
    try {
      const res = await fetch("/api/admin/quotes", { headers: { "x-admin-token": password } });
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

  const handleDelete = async (id: string) => {
    if (!confirm("Delete this quote? This can't be undone.")) return;
    setDeletingId(id);
    try {
      const res = await fetch("/api/admin/delete-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json", "x-admin-token": token },
        body: JSON.stringify({ id }),
      });
      if (!res.ok) throw new Error("Failed to delete.");
      setQuotes((prev) => prev.filter((q) => q.id !== id));
    } catch {
      alert("Failed to delete quote. Please try again.");
    } finally {
      setDeletingId(null);
    }
  };

  return (
    <div className="min-h-screen relative" style={{ background: "#F8FAFC" }}>
      {/* Dashboard — always rendered, blurred and inert until unlocked */}
      <div
        style={{
          filter: token ? "none" : "blur(8px)",
          pointerEvents: token ? "auto" : "none",
          userSelect: token ? "auto" : "none",
          transition: "filter 0.3s ease",
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
          <div className="flex items-center justify-between mb-8">
            <h1
              style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "clamp(22px, 3vw, 30px)", color: "#0A1628" }}
            >
              Quote Requests
            </h1>
            <span style={{ fontFamily: "Inter, sans-serif", fontSize: "14px", color: "#6B7A99" }}>{quotes.length} total</span>
          </div>

          {loading && <p style={{ fontFamily: "Inter, sans-serif", color: "#6B7A99" }}>Loading quotes...</p>}

          {error && (
            <div
              className="p-4 rounded-xl mb-6"
              style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626", fontFamily: "Inter, sans-serif", fontSize: "14px" }}
            >
              {error}
            </div>
          )}

          {!loading && !error && quotes.length === 0 && (
            <p style={{ fontFamily: "Inter, sans-serif", color: "#6B7A99" }}>No quote requests yet.</p>
          )}

          {!loading && quotes.length > 0 && (
            <div className="bg-white rounded-2xl overflow-hidden" style={{ border: "1px solid #EEF2F8" }}>
              <div className="overflow-x-auto">
                <table className="w-full" style={{ borderCollapse: "collapse" }}>
                  <thead>
                    <tr style={{ background: "#F8FAFC", borderBottom: "1px solid #EEF2F8" }}>
                      {["Date", "Contact", "Company", "Services", "Trucks", "Term", "Monthly", "Contract Total", ""].map((h) => (
                        <th
                          key={h}
                          style={{
                            textAlign: "left",
                            padding: "12px 16px",
                            fontFamily: "Syne, sans-serif",
                            fontWeight: 700,
                            fontSize: "12px",
                            color: "#6B7A99",
                            textTransform: "uppercase",
                            letterSpacing: "0.05em",
                            whiteSpace: "nowrap",
                          }}
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {quotes.map((q) => (
                      <tr key={q.id} style={{ borderBottom: "1px solid #F1F5F9" }}>
                        <td style={{ padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#6B7A99", whiteSpace: "nowrap" }}>
                          {new Date(q.created_at).toLocaleDateString()}
                        </td>
                        <td style={{ padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: "13px" }}>
                          <div style={{ color: "#0A1628", fontWeight: 600 }}>{q.name}</div>
                          <div style={{ color: "#6B7A99" }}>{q.email}</div>
                          <div style={{ color: "#6B7A99" }}>{q.phone}</div>
                        </td>
                        <td style={{ padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#334155" }}>
                          {q.company || "—"}
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <div className="flex flex-wrap gap-1" style={{ maxWidth: "220px" }}>
                            {q.services.map((slug) => (
                              <span
                                key={slug}
                                style={{
                                  background: "#F0F4FF",
                                  color: "#1E6FFF",
                                  padding: "2px 8px",
                                  borderRadius: "99px",
                                  fontSize: "11px",
                                  fontFamily: "Syne, sans-serif",
                                  fontWeight: 600,
                                  whiteSpace: "nowrap",
                                }}
                              >
                                {serviceTitle(slug)}
                              </span>
                            ))}
                          </div>
                        </td>
                        <td style={{ padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#334155" }}>
                          {q.trucks}
                        </td>
                        <td style={{ padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#334155", whiteSpace: "nowrap" }}>
                          {termLabels[q.term] || q.term}
                        </td>
                        <td style={{ padding: "14px 16px", fontFamily: "Syne, sans-serif", fontWeight: 700, fontSize: "13px", color: "#1E6FFF", whiteSpace: "nowrap" }}>
                          {formatUSD(q.monthly_total)}
                        </td>
                        <td style={{ padding: "14px 16px", fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#334155", whiteSpace: "nowrap" }}>
                          {formatUSD(q.contract_total)}
                        </td>
                        <td style={{ padding: "14px 16px" }}>
                          <button
                            onClick={() => handleDelete(q.id)}
                            disabled={deletingId === q.id}
                            style={{ color: "#dc2626", fontFamily: "Inter, sans-serif", fontSize: "13px", fontWeight: 500, background: "none", border: "none", cursor: "pointer" }}
                          >
                            {deletingId === q.id ? "..." : "Delete"}
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Password overlay */}
      {!token && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center px-6"
          style={{ background: "rgba(10, 22, 40, 0.55)" }}
        >
          <div className="bg-white rounded-2xl w-full max-w-sm p-8" style={{ boxShadow: "0 40px 80px rgba(0,0,0,0.35)" }}>
            <div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5" style={{ background: "#1E6FFF" }}>
              <svg viewBox="0 0 20 20" className="w-6 h-6 fill-white">
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <h2 style={{ fontFamily: "Syne, sans-serif", fontWeight: 800, fontSize: "18px", color: "#0A1628", textAlign: "center" }} className="mb-1">
              Locked
            </h2>
            <p style={{ fontFamily: "Inter, sans-serif", fontSize: "13px", color: "#6B7A99", textAlign: "center" }} className="mb-6">
              Enter the admin password to view quote requests.
            </p>
            <form onSubmit={handleLogin} className="space-y-4">
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Admin password"
                className="form-input"
                required
                autoFocus
              />
              {loginError && (
                <div className="p-3 rounded-xl text-sm" style={{ background: "#fef2f2", border: "1px solid #fecaca", color: "#dc2626" }}>
                  {loginError}
                </div>
              )}
              <button type="submit" className="btn-primary w-full justify-center" disabled={isLoggingIn}>
                {isLoggingIn ? "Verifying..." : "Unlock"}
              </button>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}