import logoSmall from "../assets/logo-small-icon.svg";
import walmartIcon from "../assets/walmart-spark-icon.png";
import amazonIcon from "../assets/amazon-icon.png";
import shopifyIcon from "../assets/shopify-icon.png";
import agencyIcon from "../assets/agency-icon.png";
import wholesaleIcon from "../assets/wholesale-icon.png";
import twoDWorkflowIcon from "../assets/2d-workflow-icon.png";
import inventoryManagementIcon from "../assets/inventory-management-icon.png";
import fbmIcon from "../assets/fbm-icon.png";
import settingsIcon from "../assets/settings-icon.png";
import distribution from "../assets/distribution-icon.png";
import repricer from "../assets/repricer-icon.png";
import threePLFulfillment from "../assets/3pl-fulfillment-icon.png";
import wmsFeatures from "../assets/wms-features-icon.png";
import returnsAndRemovals from "../assets/return-removals-icon.png";
import threePLTools from "../assets/3pl-tools-icon.png";

export const navLinksContent = [
  {
    icon: agencyIcon,
    title: "Agency",
    points: ["User Access", "Invoice Adjustments", "Client Invoices"],
    marketplaces: [walmartIcon, amazonIcon, shopifyIcon],
  },
  {
    icon: distribution,
    title: "Distribution (beta)",
    points: ["Create a New Inbound Po", "Active Clients", "Payment History"],
    marketplaces: [amazonIcon],
  },
  {
    icon: wholesaleIcon,
    title: "Wholesale",
    points: ["Vendors CRM", "Catalog Analyzer", "PO Management", "Sales & Profit Report"],
    marketplaces: [amazonIcon],
  },
  {
    icon: repricer,
    title: "Ai Repricer",
    points: ["Setup Ai Repricing"],
    marketplaces: [amazonIcon],
  },
  {
    icon: twoDWorkflowIcon,
    title: "2D Workflow",
    points: ["Automate Your Inbound Shipments"],
    marketplaces: [amazonIcon],
  },
  {
    icon: threePLFulfillment,
    title: "3PL Fulfillment",
    points: ["Create New FBA inbound Request", "Create a New Storage Request"],
    marketplaces: [walmartIcon, amazonIcon, shopifyIcon],
  },
  {
    icon: threePLTools,
    title: "3PL Tools",
    points: ["Order Fulfillment"],
    marketplaces: [walmartIcon, amazonIcon, shopifyIcon],
  },
  {
    icon: inventoryManagementIcon,
    title: "Inventory Management",
    points: ["At Amazon/Walmart Inventory", "At 3PL Inventory", "At Home Inventory"],
    marketplaces: [walmartIcon, amazonIcon, shopifyIcon],
  },
  {
    icon: wmsFeatures,
    title: "WMS Features",
    points: ["Create New Storage Location", "Manage Storage Locations"],
    marketplaces: [logoSmall],
  },
  {
    icon: fbmIcon,
    title: "FBM",
    points: [
      "Automatic Lister",
      "Fulfill Open Orders",
      "Manage All Orders",
      "Marketplace Settings",
      "Shipping Fee Wallet",
    ],
    marketplaces: [walmartIcon, amazonIcon, shopifyIcon],
  },
  {
    icon: returnsAndRemovals,
    title: "Returns & Removals",
    points: ["Setup Automatic Removal Claims"],
    marketplaces: [amazonIcon, walmartIcon],
  },
  {
    icon: settingsIcon,
    title: "Settings",
    points: ["Account Integration", "Payment Info", "Invoice History"],
    marketplaces: [logoSmall],
  },
];
