import { BarChart2, ShoppingBag, Users, Zap } from "lucide-react";
import { motion } from "framer-motion";

import HeaderAdmin from "../../componen/Header/headerAdmin";
import StatCard from "../../componen/Statcard/statcard";
import SalesOverviewChart from "../../componen/overview/SalesOverviewChart";
import CategoryDistributionChart from "../../componen/overview/CategoryDistributionChart";
import SalesChannelChart from "../../componen/overview/SalesChannelChart";

import "./dashboardAdmin.css";

const DashboardAdmin = () => {
  return (
    <div className="dashboard-container">
      <HeaderAdmin title="Dashboard" />

      <main className="dashboard-main-content">
        {/* STATS */}
        <motion.div
          className="stats-container"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}>
          <StatCard name="Total Pengguna" icon={Users} value="$12,345" color="#6366F1" />
          <StatCard name="Total Persewaan" icon={Zap} value="1,234" color="#8B5CF6" />
          <StatCard name="Total Pendapatan" icon={ShoppingBag} value="567" color="#EC4899" />
          <StatCard name="Rating Sewa" icon={BarChart2} value="12.5%" color="#10B981" />
        </motion.div>

        {/* CHARTS */}
        <div className="charts-container">
          <SalesOverviewChart />
        </div>
      </main>
    </div>
  );
};

export default DashboardAdmin;
