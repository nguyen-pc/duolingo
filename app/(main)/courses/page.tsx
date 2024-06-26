import { getCourses, getUserProgress } from "@/db/queries";
import { List } from "./list";

const CoursesPage = async () => {
  const courses = await getCourses();
  const userProgress = await getUserProgress();
  return (
    <div className="h-full max-w-[912px] px-3 mx-auto">
      <h1 className="text-2x32l font-bold text-neutral-700">
        Language courses
      </h1>
      <List courses={courses} activeCoursesId={userProgress?.activeCourseId} />
    </div>
  );
};

export default CoursesPage;
