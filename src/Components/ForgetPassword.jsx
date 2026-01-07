
import { sendPasswordResetEmail } from 'firebase/auth';
import { useState } from 'react';
import { Link, useLocation } from 'react-router';
import { auth } from '../Firebase/Firebase.init';
import UseProducts from '../Hooks/UseProducts';
import LoadingSpinner from './LoadingSpinner';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const location = useLocation();
    const { loading, } = UseProducts()
    const notify = () => toast('Please check your email.');
    const [email, setEmail] = useState(location.state?.email || '');

    if (loading) return <LoadingSpinner></LoadingSpinner>



    const handleForgetPassword = (e) => {
        e.preventDefault();

        sendPasswordResetEmail(auth, email)
            .then(() => {
                setTimeout(() => {
                    window.open('https://mail.google.com', '_blank');
                }, 1500);
                notify();
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="card max-w-md w-full bg-white rounded-xl shadow-2xl p-8">
                <div className="card-body text-center mb-8">
                    <h2 className=" text-center text-3xl font-bold text-gray-800">Forgot Password?</h2>
                    <p className='text-gray-600 mt-2'>Enter your email to reset your password</p>

                    <form onSubmit={handleForgetPassword} className="space-y-6">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text block text-sm font-medium text-gray-700 mb-2">Email</span>
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                placeholder="Email"
                                className="input input-bordered w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                required
                            />
                        </div>

                        <div className="form-control mt-6">
                            <button type="submit" className="btn btn-primary w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 font-semibold transition-colors">
                                Reset Password
                            </button>
                        </div>
                    </form>

                    <div className="text-center mt-4">
                        <p className="mt-6 text-center text-sm text-gray-600">
                            Remember your password?
                            <Link to="/login" className="link link-hover text-blue-600 hover:text-blue-700 font-medium">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;