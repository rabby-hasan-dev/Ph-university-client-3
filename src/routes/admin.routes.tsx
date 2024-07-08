import AcademicSemester from "../pages/admin/academicManagement/AcademicSemester";
import AdminDashboard from "../pages/admin/AdminDashboard";
import CreateAdmin from "../pages/admin/CreateAdmin";
import CreateFaculty from "../pages/admin/CreateFaculty";
import CreateStudent from "../pages/admin/CreateStudent";


export const adminPaths = [

    {
        name: "Dashboard",
        path: 'dashboard',
        element: <AdminDashboard></AdminDashboard>,
    },
    {
        name: "Academic Management",
        children: [
            {
                name: "Academic Semester",
                path: 'academic-semesters',
                element: <AcademicSemester></AcademicSemester>,
            },


        ]

    },
    {
        name: "User Management",
        children: [
            {
                name: "Create Admin",
                path: 'create-admin',
                element: <CreateAdmin></CreateAdmin>,
            },
            {
                name: "Create Faculty",
                path: 'create-faculty',
                element: <CreateFaculty></CreateFaculty>,
            },
            {
                name: "create-student",
                path: 'create-student',
                element: <CreateStudent></CreateStudent>,
            },

        ]

    }
]

