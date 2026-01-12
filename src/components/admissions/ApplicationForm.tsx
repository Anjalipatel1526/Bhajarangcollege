import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const ApplicationForm = ({ onSuccess }: { onSuccess?: () => void }) => {
    const { toast } = useToast();
    const [isSubmitting, setIsSubmitting] = useState(false);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate submission
        setTimeout(() => {
            setIsSubmitting(false);
            toast({
                title: "Application Submitted Successfully",
                description: "We have received your application. Our team will verify your documents and contact you soon.",
                duration: 5000,
            });
            if (onSuccess) onSuccess();
        }, 2000);
    };

    return (
        <section className="max-w-5xl mx-auto p-4 md:p-6 font-sans">
            <div className="text-center mb-10">
                <p className="mb-4 text-lg font-bold text-secondary">
                    For Enquiry: +91 94446 26262
                </p>
                <h2 className="text-3xl font-bold text-primary mb-3">Online Admission Application</h2>
                <p className="text-muted-foreground text-lg">
                    Apply to Bhajarang Engineering College and begin your journey toward academic excellence.
                </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">

                {/* 1. Program Selection */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-secondary mb-6 border-b pb-2">1. Program Selection</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label>Program Level *</Label>
                            <Select required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Level" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="ug">Undergraduate (UG)</SelectItem>
                                    <SelectItem value="pg">Postgraduate (PG)</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Course Applying For *</Label>
                            <Select required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Course" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="cse">CSE</SelectItem>
                                    <SelectItem value="it">IT</SelectItem>
                                    <SelectItem value="ece">ECE</SelectItem>
                                    <SelectItem value="eee">EEE</SelectItem>
                                    <SelectItem value="mech">Mechanical Engineering</SelectItem>
                                    <SelectItem value="civil">Civil Engineering</SelectItem>
                                    <SelectItem value="ai_ds">AI & Data Science</SelectItem>
                                    <SelectItem value="mba">MBA</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Mode of Study</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Mode" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="regular">Regular</SelectItem>
                                    <SelectItem value="lateral">Lateral Entry</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                    </div>
                </div>

                {/* 2. Personal Information */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-secondary mb-6 border-b pb-2">2. Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Full Name *</Label>
                            <Input placeholder="As per 10th Certificate" required />
                        </div>
                        <div className="space-y-2">
                            <Label>Date of Birth *</Label>
                            <Input type="date" required />
                        </div>
                        <div className="space-y-2">
                            <Label>Gender *</Label>
                            <Select required>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Gender" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="male">Male</SelectItem>
                                    <SelectItem value="female">Female</SelectItem>
                                    <SelectItem value="other">Other</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label>Category</Label>
                            <Select>
                                <SelectTrigger>
                                    <SelectValue placeholder="Select Category" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="general">General</SelectItem>
                                    <SelectItem value="sc">SC</SelectItem>
                                    <SelectItem value="st">ST</SelectItem>
                                    <SelectItem value="obc">OBC</SelectItem>
                                    <SelectItem value="minority">Minority</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label>Nationality</Label>
                            <Input placeholder="Nationality" defaultValue="Indian" />
                        </div>
                    </div>
                </div>

                {/* 3. Contact Details */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-secondary mb-6 border-b pb-2">3. Contact Details</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Mobile Number *</Label>
                            <Input type="tel" placeholder="Enter mobile number" required />
                        </div>
                        <div className="space-y-2">
                            <Label>Email Address *</Label>
                            <Input type="email" placeholder="Enter email address" required />
                        </div>
                        <div className="space-y-2">
                            <Label>Parent / Guardian Name</Label>
                            <Input placeholder="Enter parent name" />
                        </div>
                        <div className="space-y-2">
                            <Label>Parent Contact Number</Label>
                            <Input type="tel" placeholder="Enter parent contact" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label>Communication Address</Label>
                            <Textarea placeholder="Enter full address" className="min-h-[100px]" />
                        </div>
                    </div>
                </div>

                {/* 4. Academic Information */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-secondary mb-6 border-b pb-2">4. Academic Information</h3>

                    <div className="space-y-6">
                        {/* 10th Standard */}
                        <div>
                            <h4 className="text-primary font-semibold text-lg mb-4">10th Standard Details</h4>
                            <div className="grid md:grid-cols-3 gap-4">
                                <div className="space-y-2">
                                    <Label>Board</Label>
                                    <Input placeholder="e.g. State Board / CBSE" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Year of Passing</Label>
                                    <Input type="number" placeholder="YYYY" />
                                </div>
                                <div className="space-y-2">
                                    <Label>Percentage / CGPA</Label>
                                    <Input placeholder="%" />
                                </div>
                            </div>
                        </div>

                        {/* 12th Standard */}
                        <div>
                            <h4 className="text-primary font-semibold text-lg mb-4">12th Standard Details (HSC)</h4>
                            <div className="grid md:grid-cols-2 gap-4 mb-4">
                                <div className="space-y-2">
                                    <Label>Board *</Label>
                                    <Input placeholder="HSC / CBSE / ISC" required />
                                </div>
                                <div className="space-y-2">
                                    <Label>Year of Passing *</Label>
                                    <Input type="number" placeholder="YYYY" required />
                                </div>
                            </div>

                            <Label className="mb-2 block text-muted-foreground">Major Subjects Marks</Label>
                            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-4">
                                <div className="space-y-2">
                                    <Label className="text-xs">Mathematics</Label>
                                    <Input type="number" placeholder="Marks" required />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs">Physics</Label>
                                    <Input type="number" placeholder="Marks" required />
                                </div>
                                <div className="space-y-2">
                                    <Label className="text-xs">Chemistry</Label>
                                    <Input type="number" placeholder="Marks" required />
                                </div>
                            </div>

                            <div className="md:w-1/2">
                                <Label>Total Percentage / Cut-off *</Label>
                                <Input type="number" placeholder="Total %" required />
                            </div>
                        </div>
                    </div>
                </div>

                {/* 5. Entrance Exam Details */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-secondary mb-6 border-b pb-2">5. Entrance Exam Details (If Applicable)</h3>
                    <div className="grid md:grid-cols-3 gap-6">
                        <div className="space-y-2">
                            <Label>Exam Name</Label>
                            <Input placeholder="e.g. TNEA" />
                        </div>
                        <div className="space-y-2">
                            <Label>Roll Number</Label>
                            <Input placeholder="Enter roll number" />
                        </div>
                        <div className="space-y-2">
                            <Label>Score / Rank</Label>
                            <Input placeholder="Enter score or rank" />
                        </div>
                    </div>
                </div>

                {/* 6. Document Upload */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-secondary mb-6 border-b pb-2">6. Document Upload</h3>
                    <div className="grid md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                            <Label>Passport Size Photograph</Label>
                            <Input type="file" className="cursor-pointer" />
                        </div>
                        <div className="space-y-2">
                            <Label>Mark Sheets (10th, 12th / Degree)</Label>
                            <Input type="file" multiple className="cursor-pointer" />
                        </div>
                        <div className="space-y-2 md:col-span-2">
                            <Label>Transfer / Community Certificate</Label>
                            <Input type="file" className="cursor-pointer" />
                        </div>
                    </div>
                </div>

                {/* 7. Declaration */}
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-lg border border-gray-100">
                    <h3 className="text-xl font-bold text-secondary mb-4 border-b pb-2">7. Declaration</h3>
                    <div className="flex items-start space-x-3">
                        <Checkbox id="declaration" required />
                        <label
                            htmlFor="declaration"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 leading-relaxed text-gray-700"
                        >
                            I hereby declare that the information provided above is true and correct to the best of my knowledge. I understand that admission is subject to verification and approval by Bhajarang Engineering College.
                        </label>
                    </div>
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                    <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="w-full text-lg font-bold py-6 bg-primary hover:bg-primary/90 text-white shadow-xl transition-all hover:scale-[1.01] rounded-xl"
                    >
                        {isSubmitting ? "Submitting Application..." : "Submit Application"}
                    </Button>
                    <p className="text-center text-sm text-muted-foreground mt-4">
                        By clicking submit, your application will be reviewed by the admission committee.
                    </p>
                </div>

            </form>
        </section>
    );
};

export default ApplicationForm;
