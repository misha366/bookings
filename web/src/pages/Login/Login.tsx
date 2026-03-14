import { type ReactNode } from 'react';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { z } from 'zod';

import iconApple from '../../assets/icons/icon-apple.svg';
import iconDone from '../../assets/icons/icon-done.png';
import iconDumbbell from '../../assets/icons/icon-dumbbell.png';
import iconEmail from '../../assets/icons/icon-email.svg';
import iconGoogle from '../../assets/icons/icon-google.svg';
import iconPassword from '../../assets/icons/icon-password.png';
import { FormField } from '../../components/FormField';
import { Logo } from '../../components/Logo';
import { SocialButton } from '../../components/SocialButton';

import './Login.sass';

const loginSchema = z.object({
  email: z.email('Please enter a valid email address'),
  password: z.string().min(8, 'Password must be at least 8 characters'),
  rememberMe: z.boolean().optional(),
});

type LoginForm = z.infer<typeof loginSchema>;

export const Login = (): ReactNode => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: 'demo@visitor.com',
      password: 'visitorpassword333',
    },
  });

  const onSubmit = async (_data: LoginForm): Promise<void> => {
    // TODO: Replace with real API call
    await new Promise((resolve) => setTimeout(resolve, 500));
    navigate('/calendar');
  };

  return (
    <div className="login">
      <div className="login__imposter-form">
        <form className="login-form" onSubmit={handleSubmit(onSubmit)}>
          <Logo />

          <h2 className="login-form__title">Welcome back</h2>
          <h4 className="login-form__subtitle">Sign in to your account to continue</h4>

          <FormField
            id="email"
            label="Email address"
            type="email"
            placeholder="you@example.com"
            icon={iconEmail}
            error={errors.email?.message}
            register={register('email')}
          />

          <FormField
            id="password"
            label="Password"
            type="password"
            placeholder="Enter your password"
            icon={iconPassword}
            error={errors.password?.message}
            register={register('password')}
          />

          <div className="login-form__options form-options">
            <label className="form-options__remember remember">
              <input className="remember__checkbox" type="checkbox" {...register('rememberMe')} />
              <span className="remember__text">Remember me</span>
            </label>
            <p className="form-options__demo-hint demo-hint">
              <span className="demo-hint__default">Use demo credentials to explore the app</span>
              <span className="demo-hint__hover">demo@visitor.com / visitorpassword333</span>
            </p>
          </div>

          <button type="submit" className="login-form__submit btn-primary">
            Sign in
          </button>

          <div className="login-form__divider">or continue with</div>

          <div className="login-form__social form-social">
            <SocialButton icon={iconGoogle} text="Google" variant="google" />
            <SocialButton icon={iconApple} text="Apple" variant="apple" />
          </div>
        </form>
      </div>

      <div className="login__imposter-info">
        <div className="login-info">
          <img
            src={iconDumbbell}
            alt=""
            className="login-info__dumbbell login-info__dumbbell_blue"
          />
          <h3 className="login-info__title">Transform your fitness journey</h3>
          <p className="login-info__subtitle">
            Book sessions with top trainers, track your progress, and achieve your fitness goals
            with FitnessBooking.
          </p>
          <ul className="login-info__list">
            <li className="login-info__item info-item">
              <img src={iconDone} alt="" className="info-item__icon" />
              <div className="info-item__content">
                <span className="info-item__title">Expert trainers</span>
                <span className="info-item__text">
                  Access certified professionals for personalized training
                </span>
              </div>
            </li>
            <li className="login-info__item info-item">
              <img src={iconDone} alt="" className="info-item__icon" />
              <div className="info-item__content">
                <span className="info-item__title">Flexible scheduling</span>
                <span className="info-item__text">
                  Book sessions that fit your busy lifestyle
                </span>
              </div>
            </li>
            <li className="login-info__item info-item">
              <img src={iconDone} alt="" className="info-item__icon" />
              <div className="info-item__content">
                <span className="info-item__title">Track progress</span>
                <span className="info-item__text">
                  Monitor your fitness journey with detailed insights
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
