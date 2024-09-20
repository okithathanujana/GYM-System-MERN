import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="flex flex-col gap-[25px]">
      <a className='p-3 bg-green-500 text-center text-slate-100' href="/feedback">
        Feedbacks
      </a>
      <a className='p-3 bg-green-500 text-center text-slate-100' href="/feedback/packages">
        Show Istructor Feedbacks
      </a>
      <a className='p-3 bg-green-500 text-center text-slate-100' href="/feedback/istructors">
        Show Packages Feedbacks
      </a>
      <a className='p-3 bg-green-500 text-center text-slate-100' href={`/admin/feedback/${'istructors'}`}>
        Admin Show Istructor Feedbacks
      </a>
      <a className='p-3 bg-green-500 text-center text-slate-100' href={`/admin/feedback/${'packages'}`}>
        Admin Show Packages Feedbacks
      </a>
    </div>
  );
}

export default App;
