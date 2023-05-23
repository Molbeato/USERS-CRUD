import { useForm } from "react-hook-form"
import './UserForm.css'



const UserForm = ({onClose, onSend, initialData}) => {
    const { register, handleSubmit} = useForm({
        defaultValues: initialData
    });

    const onSubmit = (data) => {
        if (initialData) onSend({...data, id: initialData.id})
        else onSend(data)
    };

  return (
    <form className='user-form' onSubmit={handleSubmit(onSubmit)}>

      <h2 className='user-form_tittle'>{initialData ? "Edit user" : "New User"}</h2>

      <button type='button' className='user-form_close-btn' onClick={() => onClose()}>X</button>

      <div className='user-form_input-container'>
        <label htmlFor="nameid" className='user-form_label'>
          Name
        </label>
        <input type="text" placeholder='' id='nameId'
        {...register('first_name')} />
      </div>

     <div className='user-form_inputs'>

     <div className='user-form_input-container'>
        <label htmlFor="lastnameId" className='user-form_label'>
          Last Name
        </label>
        <input type="text" placeholder='' id='lastnameId'
        {...register('last_name')}/>
      </div>

      <div className='user-form_input-container'>
        <label htmlFor="emailnameId" className='user-form_label'>
          E-mail
        </label>
        <input type="email" placeholder='example@mail.com' id='emailId'
        {...register('email')}/>
      </div>

      <div className='user-form_input-container'>
        <label htmlFor="passwordId" className='user-form_label'>
          Password
        </label>
        <input type="password" placeholder='' id='passwordId'
        {...register('password')}/>
      </div>

      <div className='user-form_input-container'>
        <label htmlFor="birthdayId" className='user-form_label'>
          Birthday
        </label>
        <input type="date" placeholder='' id='birthdayId'
        {...register('birthday')}/>
      </div>

      <button type='submit' className='user-form_submit'>{initialData ? 'Save changes' : "Create new user"}</button>
     </div>
    </form>
  )
}

export default UserForm