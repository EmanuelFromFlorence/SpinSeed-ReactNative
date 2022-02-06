import React from 'react';
import { Formik } from 'formik';
import Loader from '../../../components/Loader/Loader';
import InputFormItem from '../../../components/FormItems/items/InputFormItem';
import Widget from '../../../components/Widget/Widget';

const UsersForm = (props) => {
  const { onSubmit, isEditing, findLoading, saveLoading, record, onCancel } =
    props;

  const handleSubmit = (values) => {
    const { ...data } = values || {};
    onSubmit(data);
  };

  const title = () => {
    return 'Change Password';
  };

  const passwordSchema = {
    currentPassword: { type: 'string', label: 'Current Password' },
    newPassword: { type: 'string', label: 'New Password' },
    confirmNewPassword: { type: 'string', label: 'Confirm new Password' },
  };

  const iniValues = {
    currentPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  };

  const renderForm = () => {
    return (
      <Widget className='widget-p-md'>
        <Formik onSubmit={handleSubmit} initialValues={iniValues}>
          {(form) => (
            <form onSubmit={form.handleSubmit}>
              <InputFormItem
                name={'currentPassword'}
                password
                schema={passwordSchema}
              />

              <InputFormItem
                name={'newPassword'}
                schema={passwordSchema}
                password
              />

              <InputFormItem
                name={'confirmNewPassword'}
                schema={passwordSchema}
                password
              />
              <div>
                <button
                  className='btn btn-primary mr-3'
                  disabled={saveLoading}
                  type='button'
                  onClick={form.handleSubmit}
                >
                  {' '}
                  Change Password
                </button>{' '}
                <button
                  className='btn btn-secondary'
                  type='button'
                  disabled={saveLoading}
                  onClick={() => onCancel()}
                >
                  {' '}
                  Cancel
                </button>
              </div>
            </form>
          )}
        </Formik>
      </Widget>
    );
  };

  if (findLoading) {
    return <Loader />;
  }

  if (isEditing && !record) {
    return <Loader />;
  }

  return renderForm();
};

export default UsersForm;
