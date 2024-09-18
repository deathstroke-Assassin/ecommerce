import { useState } from "react";
import { Link } from "react-router-dom";
import { Mail, Lock, User, ArrowRight, Loader, UserPlus } from "lucide-react";
import { motion } from "framer-motion";
import { CircularProgress, Container, Typography } from "@mui/material";
import { useUserStore } from "../../stores/useUserStore";

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const { signup, loading } = useUserStore();

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData)
    signup(formData);
  };



  return (
    
    <Container alignItems="center">
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '3rem 1.5rem',height: "950px"  }}>
        <motion.div
          style={{ margin: '0 auto', width: '100%', maxWidth: '28rem' }}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h2 style={{ marginTop: '1.5rem', textAlign: 'center', fontSize: '2rem', fontWeight: 'bold', color: '#10B981' }}>
            Create your account
          </h2>
        </motion.div>

        <motion.div
          style={{ marginTop: '2rem', margin: '0 auto', width: '100%', maxWidth: '28rem' }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
                <Container alignItems="center" > 
          <div style={{ backgroundColor: '#1F3947', padding: '2rem 1rem', boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)', borderRadius: '0.5rem' }}>
            <form onSubmit={handleSubmit} style={{ display: 'grid', gap: '1.5rem' }}>
              <div>
                <label htmlFor='name' style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#D1D5DB' }}>
                  Full name
                </label>
                <div style={{ marginTop: '0.25rem', position: 'relative', borderRadius: '0.375rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
                  <div style={{ position: 'absolute', left: '0', paddingLeft: '0.75rem', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                    <User style={{ height: '1.25rem', width: '1.25rem', color: '#9CA3AF' }} aria-hidden='true' />
                  </div>
                  <input
                    id='name'
                    type='text'
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.5rem 0.75rem 0.5rem 2.5rem',
                      backgroundColor: '#374151',
                      border: '1px solid #4B5563',
                      borderRadius: '0.375rem',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                      color: '#D1D5DB',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    placeholder='John Doe'
                    />
                </div>
              </div>

              <div>
                <label htmlFor='email' style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#D1D5DB' }}>
                  Email address
                </label>
                <div style={{ marginTop: '0.25rem', position: 'relative', borderRadius: '0.375rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
                  <div style={{ position: 'absolute', left: '0', paddingLeft: '0.75rem', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                    <Mail style={{ height: '1.25rem', width: '1.25rem', color: '#9CA3AF' }} aria-hidden='true' />
                  </div>
                  <input
                    id='email'
                    type='email'
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.5rem 0.75rem 0.5rem 2.5rem',
                      backgroundColor: '#374151',
                      border: '1px solid #4B5563',
                      borderRadius: '0.375rem',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                      color: '#D1D5DB',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    placeholder='you@example.com'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='password' style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#D1D5DB' }}>
                  Password
                </label>
                <div style={{ marginTop: '0.25rem', position: 'relative', borderRadius: '0.375rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
                  <div style={{ position: 'absolute', left: '0', paddingLeft: '0.75rem', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                    <Lock style={{ height: '1.25rem', width: '1.25rem', color: '#9CA3AF' }} aria-hidden='true' />
                  </div>
                  <input
                    id='password'
                    type='password'
                    required
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    style={{
                      display: 'block',
                      width: '100%',
                      padding: '0.5rem 0.75rem 0.5rem 2.5rem',
                      backgroundColor: '#374151',
                      border: '1px solid #4B5563',
                      borderRadius: '0.375rem',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                      color: '#D1D5DB',
                      fontSize: '0.875rem',
                      outline: 'none',
                      transition: 'border-color 0.2s, box-shadow 0.2s',
                    }}
                    placeholder='••••••••'
                  />
                </div>
              </div>

              <div>
                <label htmlFor='confirmPassword' style={{ display: 'block', fontSize: '0.875rem', fontWeight: '500', color: '#D1D5DB' }}>
                  Confirm Password
                </label>
                <div style={{ marginTop: '0.25rem', position: 'relative', borderRadius: '0.375rem', boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)' }}>
                  <div style={{ position: 'absolute',  left: '0', paddingLeft: '0.75rem', display: 'flex', alignItems: 'center', pointerEvents: 'none' }}>
                    <Lock style={{ height: '1.25rem', width: '1.25rem', color: '#9CA3AF' }} aria-hidden='true' />
                  </div>
                  <input
                    id='confirmPassword'
                    type='password'
                    required
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                    style={{
                    display: 'block',
                      width: '100%',
                      padding: '0.5rem 0.75rem 0.5rem 2.5rem',
                      backgroundColor: '#374151',
                      border: '1px solid #4B5563',
                      borderRadius: '0.375rem',
                      boxShadow: '0 1px 2px rgba(0, 0, 0, 0.05)',
                      color: '#D1D5DB',
                      }}
                       /> 
							</div>
						</div>

						

						<button
							type='submit'
							style={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
								padding: '0.5rem 1rem',
								borderRadius: '0.375rem',
								boxShadow: '0 1px 3px rgba(0, 0, 0, 0.1)',
								color: 'white',
								backgroundColor: '#34D399',
								border: 'none',
								cursor: 'pointer',
								transition: 'background-color 0.2s ease-in-out',
							}}
														
							disabled={loading}
						> 
							{loading ? (
								<>
								<CircularProgress size={20} sx={{mr: 3}} color="success" />
									Loading...
								</>
							) : (
								<>
									<UserPlus className='mr-2 h-5 w-5' aria-hidden='true' />
									Sign up
								</>
							)}
						</button>
					</form>


			
				</div>
        </Container>

        <p style={{marginTop: "2rem", textAlign: "center", fontSize: "0.875rem", color: "#718096", alignItems:"center"}}></p>
					<p className='mt-8 text-center text-sm text-gray-400'>
          <Typography>
						Already have an account?{" "}
						<Link to='/login' style={{alignItems:"center", fontSize:"1rem", color:"#71f096", }} >
							
              Login here <ArrowRight style={{display:"inline", height:"20px",  width:-4}} />
              
						</Link>
            </Typography>
					</p>
			</motion.div>
		</div>
    </Container>
	);
};
export default SignUpPage;