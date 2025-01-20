import React, { useState } from "react";
import { Form, Select, DatePicker, InputNumber, Button, Checkbox, Input, notification, Switch } from "antd";
import { DeleteFilled, PlusSquareFilled, CheckOutlined, CloseOutlined, UnorderedListOutlined, ArrowLeftOutlined, SaveOutlined } from "@ant-design/icons";

// Types for Form Fields
interface FuelVoucherFormValues {
    supplier: string;
    shippedFromTerminal: string;
    shippedVia: string;
    terms: string;
    taxState: number;
    refNumber: number;
    invoiceNumber: number;
    invoiceDate: Date;
    dueDate: Date;
    discDueDate: Date | null;
    postingDate: Date;
    paymentMethod: string;
    paymentHold: boolean;
    contactNumber: string;
    deferredInvoiceNumber: number | null;
    deferredTaxDueDate: Date | null;
    product: string;
    billOfLading: number;
    pickupDate: Date;
    grossQuantity: number;
    netQuantity: number;
    rate: number;
    taxes: number;
    defTax: number;
    lineTotal: number;
    description: string;
    chartOfAccount: string;
    quantity: number;
    rateOther: number;
    disc: number;
    taxesOther: number;
    subTotal: number;
    taxesTotal: number;
    total: number;
}

const FuelVoucherForm: React.FC = () => {
    const [form] = Form.useForm();
    const [isActive, setIsActive] = useState<boolean>(false);



    // Handle form submission
    const onFinish = (values: FuelVoucherFormValues) => {
        console.log("Form Data:", values);

        // Show success message
        notification.success({
            message: "Form Submitted Successfully",
            description: "The fuel voucher has been saved.",
        });
        form.resetFields();
    };
    const handleSwitchChange = (checked: boolean) => {
        setIsActive(checked);
        console.log(`Switch is ${checked ? "ON" : "OFF"}`);
    };


    return (
        <div className="container">
        <Form form={form} layout="vertical" onFinish={onFinish} style={{ backgroundColor: "#f0f0f0", padding: "10px", maxWidth: "100%", margin: "20px" }}>
           <div style={{display:"flex", flexDirection:"row",justifyContent:"space-between"}}>
            <h2>Create Fuel Voucher</h2>
            <div style={{display:"flex", gap:"10px" }}>
            <Button type="primary" icon={<UnorderedListOutlined />} />
            <Button type="primary" icon={<PlusSquareFilled />} />
            </div>
            </div>

            {/* Row 1 */}
            <div style={{ display: "flex", gap: "10px" }}>
                <Form.Item  label="Supplier" name="supplier" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a supplier" }]}>
                    <Select placeholder="Supplier">
                        <Select.Option value="1">Valero</Select.Option>
                        <Select.Option value="2">Citgo</Select.Option>
                        <Select.Option value="3">Marathon</Select.Option>
                        <Select.Option value="4">Shell</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Shipped From Terminal" name="shippedFromTerminal" style={{ flex: 1 }} rules={[{ required: true, message: "Please select Shipped From Terminal" }]}>
                    <Select placeholder="Shipped From Terminal">
                        <Select.Option value="1">Motiva Enterprises LLC-1</Select.Option>
                        <Select.Option value="2">Phillips 66 PL - Pasadena</Select.Option>
                        <Select.Option value="3">Magellan Pipeline Company L.P.-6</Select.Option>
                        <Select.Option value="4">KM Liquids Terminals LLC</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Shipped Via" name="shippedVia" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a Shipped Via" }]}>
                    <Select placeholder="Shipped Via">
                        <Select.Option value="1">TTE Company</Select.Option>
                        <Select.Option value="2">Always Energy 2</Select.Option>
                        <Select.Option value="3">Sunoco Company</Select.Option>
                        <Select.Option value="4">Campbell Oil</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Terms" name="terms" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a Terms" }]}>
                    <Select placeholder="Terms">
                        <Select.Option value="1">Net day 1</Select.Option>
                        <Select.Option value="2">Net day 7</Select.Option>
                        <Select.Option value="3">Net day 10</Select.Option>
                        <Select.Option value="4">Net day 15</Select.Option>
                    </Select>
                </Form.Item>
            </div>

            {/* Row 2 */}
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                <Form.Item label="Tax State" name="taxState" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter the Tax State" }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="Tax State" />
                </Form.Item>

                <Form.Item label="Ref #" name="refNumber" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter the Ref." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="PO number" />
                </Form.Item>

                <Form.Item label="Invoice Number" name="invoiceNumber" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter the Invoice Number." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="Invoice Number" />
                </Form.Item>

                <div style={{ flex: 1 }}></div>
            </div>

            {/* Row 3 */}
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                <Form.Item label="Invoice Date" name="invoiceDate" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a Invoice Date." }]}>
                    <DatePicker style={{ width: "100%" }} placeholder="Invoice Date" />
                </Form.Item>

                <Form.Item label="Due Date" name="dueDate" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a Due Date." }]}>
                    <DatePicker style={{ width: "100%" }} placeholder="Due Date" />
                </Form.Item>

                <Form.Item label="Disc Due Date" name="discDueDate" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a Disc Due Date." }]}>
                    <DatePicker style={{ width: "100%" }} placeholder="Disc Due Date" />
                </Form.Item>

                <Form.Item label="Posting Date" name="postingDate" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a Posting Date." }]}>
                    <DatePicker style={{ width: "100%" }} placeholder="Posting Date" />
                </Form.Item>
            </div>

            {/* Payment Information Row */}
            <div style={{ display: "flex", gap: "10px", width: "100%" }}>
                <Form.Item label="Payment Method" name="paymentMethod" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a Payment Method." }]}>
                    <Select style={{ width: "100%" }} placeholder="Select Payment Method">
                        <Select.Option value="1">Credit Card</Select.Option>
                        <Select.Option value="2">Bank Transfer</Select.Option>
                        <Select.Option value="3">Cash</Select.Option>
                    </Select>
                </Form.Item>


                <Form.Item label="Payment on hold" name="isActive" style={{ flex: 1 }}>
                    <Switch
                        checked={isActive}
                        onChange={handleSwitchChange}
                        checkedChildren={<CheckOutlined />}
                        unCheckedChildren={<CloseOutlined />}
                    />
                </Form.Item>

                <Form.Item label="Contact Number" name="contactNumber" style={{ flex: 1 }} rules={[
                    { required: true, message: "Please enter a contact number." },
                    { pattern: /^[0-9]{10}$/, message: "Please enter a valid 10-digit contact number." }
                ]}>
                    <Input style={{ width: "100%" }} placeholder="Contact Number" />
                </Form.Item>

                <div style={{ flex: 1 }}></div>
            </div>


            {/* Deferred Invoice Fields */}

            <div>
                <h3 style={{ display: "inline", marginRight: "20px" }}>Deferred Invoice</h3>

                <div style={{ display: "flex", gap: "5px", marginTop: "10px", flexWrap: "wrap" }}>
                    {/* Deferred Invoice Number */}
                    <Form.Item
                        label="Deferred Invoice Number"
                        name="deferredInvoiceNumber"
                        style={{ flex: 2 }}
                        rules={[{ required: true, message: "Please enter a Deferred Invoice Number." }]}
                    >
                        <Input placeholder="Deferred Invoice Number" />
                    </Form.Item>

                    {/* Deferred Tax Due Date */}
                    <Form.Item
                        label="Deferred Tax Due Date"
                        name="deferredTaxDueDate"
                        style={{ flex: 2 }}
                        rules={[{ required: true, message: "Please select a Deferred Tax Due Date." }]}
                    >
                        <DatePicker style={{ width: "100%" }} placeholder="Select Tax Due Date" />
                    </Form.Item>
                    <Form.Item style={{ flex: 2 }}></Form.Item>
                    <Form.Item style={{ flex: 2 }}></Form.Item>
                </div>
            </div>



            {/* Product Charges Section */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", padding: "8px 0" }}>
                <h3 style={{ margin: 0 }}>Product Charges</h3>
                <div style={{ display: "flex", alignItems: "center", gap: "64px", marginRight: "14px" }}>
                    <Checkbox style={{ margin: 0 }}>Copy BOL and Datetime</Checkbox>
                    <Button type="default" icon={<PlusSquareFilled />} />
                </div>
            </div>

            {/* Product Fields */}
            <div style={{ display: "flex", gap: "10px", flexWrap: "wrap" }}>
                <Form.Item label="Product" name="product" style={{ flex: 2 }} rules={[{ required: true, message: "Please select a Product." }]}>
                    <Select placeholder="Product">
                        <Select.Option value="1">Product 1</Select.Option>
                        <Select.Option value="2">Product 2</Select.Option>
                        <Select.Option value="3">Product 3</Select.Option>
                        <Select.Option value="4">Product 4</Select.Option>
                    </Select>
                </Form.Item>
                <Form.Item label="Bill of Lading" name="billOfLading" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter a Bill of Lading." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="Bill of Lading" />
                </Form.Item>
                <Form.Item label="Pickup Date" name="pickupDate" style={{ flex: 1 }} rules={[{ required: true, message: "Please select a Pickup Date." }]}>
                    <DatePicker style={{ width: "100%" }} placeholder="Pickup Date" />
                </Form.Item>
                <Form.Item label="Gross Quanty" name="grossQuantity" style={{ fontSize: "10px", flex: 1 }} rules={[{ required: true, message: "Please enter a Gross Quantity." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="0" />
                </Form.Item>
                <Form.Item label="Net Quantity" name="netQuantity" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter a Net Quantity." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="0" />
                </Form.Item>
                <Form.Item label="Rate" name="rate" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter a Rate." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="0" />
                </Form.Item>
                <Form.Item label="Taxes" name="taxes" style={{ flex: 1 }}>
                    <InputNumber style={{ width: "100%" }} placeholder="0.00" disabled />
                </Form.Item>
                <Form.Item label="Def Taxes" name="defTax" style={{ flex: 1 }}>
                    <InputNumber style={{ width: "100%" }} placeholder="Def Taxes" disabled />
                </Form.Item>
                <Form.Item label="Line Total" name="lineTotal" style={{ flex: 1 }}>
                    <InputNumber style={{ width: "100%" }} placeholder="0.00" disabled />
                </Form.Item>
                <div>
                    <h4 style={{ marginRight: "4px" }}>Action</h4>
                    <Button type="default" icon={<DeleteFilled />} style={{ marginBottom: "0", marginRight: "8px" }} />
                </div>
            </div>

            {/* Other Charges */}

            <h3 style={{ display: "inline", marginRight: "20px" }}>Other Charges</h3>
            <Button style={{ float: "right", marginRight: "14px" }} type="default" icon={<PlusSquareFilled />} />

            {/* Other Charges Fields */}
            <div style={{ display: "flex", gap: "5px", marginTop: "10px", flexWrap: "wrap" }}>
                <Form.Item label="Description" name="description" style={{ flex: 3 }} rules={[{ required: true, message: "Please enter a Description." }]}>
                    <Input style={{ width: "100%" }} placeholder="Description" />
                </Form.Item>

                {/* Chart of Account */}
                <Form.Item label="Chart of Account" name="chartOfAccount" style={{ flex: 2 }} rules={[{ required: true, message: "Please select a Chart of Account." }]}>
                    <Select style={{ width: "100%" }} placeholder="Chart of Account">
                        <Select.Option value="1">Payment Account</Select.Option>
                        <Select.Option value="2">Vendor Account</Select.Option>
                        <Select.Option value="3">Sales Account</Select.Option>
                        <Select.Option value="4">Purchase Account</Select.Option>
                    </Select>
                </Form.Item>

                {/* Quantity */}
                <Form.Item label="Quantity" name="quantity" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter a Quantity." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="0" />
                </Form.Item>

                {/* Rate */}
                <Form.Item label="Rate" name="rateOther" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter a Rate." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="0" />
                </Form.Item>

                {/* Disc */}
                <Form.Item label="Disc" name="disc" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter a Disc." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="0" />
                </Form.Item>

                {/* Taxes */}
                <Form.Item label="Taxes" name="taxesOther" style={{ flex: 1 }} rules={[{ required: true, message: "Please enter Taxes." }]}>
                    <InputNumber style={{ width: "100%" }} placeholder="0" />
                </Form.Item>

                {/* Line Total */}
                <Form.Item label="Line Total" name="lineTotal" style={{ flex: 1 }}>
                    <InputNumber style={{ width: "100%" }} placeholder="0.00" disabled />
                </Form.Item>
                <div>
                    <h4 style={{ marginRight: "4px" }}>Action</h4>
                    <Button type="default" icon={<DeleteFilled />} style={{ marginBottom: "0", marginRight: "8px" }} />
                </div>
            </div>

            {/* Totals Section */}
            <div style={{ display: "flex", justifyContent: "flex-end", width: "100%" }}>
                <div style={{ textAlign: "right" }}>
                    <Form.Item name="subTotal">
                        <div>
                            <label style={{ marginRight: "30px" }}>Sub Total</label>
                            <InputNumber style={{ width: "200px" }} placeholder="0.00" disabled />
                        </div>
                    </Form.Item>
                    <Form.Item name="taxesTotal">
                        <div>
                            <label style={{ marginRight: "30px" }}>Taxes</label>
                            <InputNumber style={{ width: "200px" }} placeholder="0.00" disabled />
                        </div>
                    </Form.Item>
                    <Form.Item name="total">
                        <div>
                            <label style={{ marginRight: "30px" }}>Total</label>
                            <InputNumber style={{ width: "200px" }} placeholder="0.00" disabled />
                        </div>
                    </Form.Item>


                </div>
            </div>


            {/* Buttons */}
            <div style={{ textAlign: "right" }}>
                <Button icon={<SaveOutlined />} type="primary" htmlType="submit" style={{ marginRight: "10px" }}>
                    Save
                </Button>
                <Button icon={<ArrowLeftOutlined />}  type="default" onClick={() => form.resetFields()}>
                    Cancel
                </Button>
            </div>
        </Form>
        </div>
    );
};

export default FuelVoucherForm;
