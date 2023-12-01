import React from 'react'
import { DoctorInfo, FilledButton, TabsDoctorsComponents } from '../../components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { TableComponent } from '../../components/table/table.component';

export const DoctorInfoPage = () => {
  const { appointments } = useSelector( state => state.createAppointment)
  const { users } = useSelector( state => state.userAdmin)
  const { doctor } = useSelector( state => state.saveDoctors)

  const navigate = useNavigate();
  const onClick = () => {
    navigate(`../appointmentForm/create`);
  }

  //Esto es para crear la tabla de los usuarios, ahora que la tabla es mas reutilizable
  // const columns = [
  //   {name: "Id", uid: "id"},
  //   {name: "Username", uid: "username"},
  //   {name: "Password", uid: "password"},
  //   {name: "Tipo usuario", uid: "tipoUsuario"},
  //   {name: "Acciones", uid: "actions"},
  // ];

  // const tabs = [
  //   { id: "citas", label: "Citas", component: <TableComponent columns={columns} id_doctor={doctor.id} data={users} action={'users'}/> },
  //   { id: "información", label: "Información", component: <DoctorInfo info={doctor} /> },
  // ];


  const columns = [
    {name: "Id Cita", uid: "idCita"},
    {name: "Fecha Cita", uid: "fechaCita"},
    {name: "Hora Cita", uid: "horaCita"},
    {name: "Id Paciente", uid: "idPaciente"},
    {name: "Estado", uid: "status"},
    {name: "Acciones", uid: "actions"},
  ];

  const tabs = [
    { id: "citas", label: "Citas", component: <TableComponent columns={columns} id_doctor={doctor.id} data={appointments} action={'appointments'} path={'../appointmentForm/update'}/> },
    { id: "información", label: "Información", component: <DoctorInfo info={doctor} /> },
  ];

  return (
    <section className="flex flex-col items-center">
      <div className='flex justify-between w-[80%]'>
        <div className=''>
          <h1 className='text-primary text-3xl '>{doctor.nombre.cuerpo}</h1>
          <p className=''>Por favor, seleccione la pestaña que desee consultar</p>
        </div>
        <FilledButton text='Agendar Cita' onClick={() => onClick()} />
      </div>
      <TabsDoctorsComponents columns={columns} tabs={tabs} />
    </section>
  );
}
