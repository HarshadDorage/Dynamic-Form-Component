export const formSchema = [
    {
      fieldType: "text",
      label: "Supplier Name",
      name: "supplierName",
      rules: { required: true, message: "Supplier Name is required" },
    },
    {
      fieldType: "select",
      label: "Ship From Terminal",
      name: "shipFromTerminal",
      options: [
        { id: 1, name: "Motiva Enterprises LLC-1" },
        { id: 2, name: "Phillips 66 PL - Pasadena" },
        { id: 3, name: "Magellan Pipeline Company L.P.-6" },
        { id: 4, name: "KM Liquids Terminals LLC" },
      ],
      rules: { required: true, message: "Please select a terminal" },
    },
    {
      fieldType: "select",
      label: "Ship Via",
      name: "shipVia",
      options: [
        { id: 1, name: "TTE Company" },
        { id: 2, name: "Always Energy 2" },
        { id: 3, name: "Sunoco Company" },
        { id: 4, name: "Campbell Oil" },
      ],
      rules: { required: true, message: "Please select a shipping method" },
    },
    {
      fieldType: "number",
      label: "Payment Term (Days)",
      name: "paymentTerm",
      rules: { required: true, message: "Payment Term is required" },
    },
    {
      fieldType: "textarea",
      label: "Additional Notes",
      name: "notes",
      rules: { required: false },
    },
    {
      fieldType: "checkbox",
      label: "Agree to Terms",
      name: "agreeToTerms",
      rules: { required: true, message: "You must agree to the terms" },
    },
  ];
  