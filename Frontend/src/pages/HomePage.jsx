import MainLayout from "../layouts/MainLayout";
import Button from "../components/common/Button";

function HomePage() {
  return (
    <MainLayout>

      <section className="flex flex-col items-center justify-center text-center min-h-[75vh]">

        <h1 className="text-6xl font-bold text-gray-900 mb-6">
          AI Resume Analyzer
        </h1>

        <p className="text-xl text-gray-600 max-w-3xl mb-8">
          Upload your resume, get ATS score,
          identify skill gaps and prepare
          for interviews using AI.
        </p>

        <Button>
          Analyze Resume
        </Button>

      </section>

    </MainLayout>
  );
}

export default HomePage;