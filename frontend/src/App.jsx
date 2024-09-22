import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col gap-[25px] min-h-screen p-20 bg-slate-800">
      <a className='p-3 flex-1 bg-green-500 text-center text-slate-100' href="/feedback">
        Feedbacks
      </a>
      <a className='p-3 flex-1 bg-green-500 text-center text-slate-100' href="/feedback/edit/">
        Edit Feedbacks
      </a>
      <a className='p-3 flex-1 bg-green-500 text-center text-slate-100' href="/feedback/packages">
        Show Packages Feedbacks
      </a>
      <a className='p-3 flex-1 bg-green-500 text-center text-slate-100' href="/feedback/instructors">
        Show Instructor Feedbacks
      </a>
      <a className='p-3 flex-1 bg-green-500 text-center text-slate-100' href={`/admin/feedback/${'instructors'}`}>
        Admin Show Instructor Feedbacks
      </a>
      <a className='p-3 flex-1 bg-green-500 text-center text-slate-100' href={`/admin/feedback/${'packages'}`}>
        Admin Show Packages Feedbacks
      </a>
    </div>
  );
}

export default App;
