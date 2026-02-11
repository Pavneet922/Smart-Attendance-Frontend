import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useStudents } from "@/context/StudentContext";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";

const AddStudent = () => {
  const navigate = useNavigate();
  const { addStudent } = useStudents();
  const [name, setName] = useState("");
  const [rollNumber, setRollNumber] = useState("");
  const [studentClass, setStudentClass] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !rollNumber || !studentClass) {
      setError("All fields are required.");
      return;
    }
    addStudent({ name, rollNumber, class: studentClass });
    navigate("/students");
  };

  return (
    <div className="max-w-lg mx-auto">
      <h1 className="text-2xl font-bold text-foreground mb-6">Add Student</h1>
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Student Details</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-4">
            {error && (
              <p className="text-sm text-destructive">{error}</p>
            )}
            <div className="space-y-2">
              <Label htmlFor="name">Name</Label>
              <Input id="name" placeholder="Full name" value={name} onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="roll">Roll Number</Label>
              <Input id="roll" placeholder="e.g. CS111" value={rollNumber} onChange={(e) => setRollNumber(e.target.value)} />
            </div>
            <div className="space-y-2">
              <Label htmlFor="class">Class</Label>
              <Input id="class" placeholder="e.g. 10-A" value={studentClass} onChange={(e) => setStudentClass(e.target.value)} />
            </div>
            <div className="flex gap-3">
              <Button type="submit">Add Student</Button>
              <Button type="button" variant="outline" onClick={() => navigate("/students")}>
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
};

export default AddStudent;
