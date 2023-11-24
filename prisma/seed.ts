import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function clearDatabase() {
  await prisma.requestEvent.deleteMany({});
  await prisma.event.deleteMany({});
  await prisma.passwordResetToken.deleteMany({});
  await prisma.notificationPreference.deleteMany({});
  await prisma.user.deleteMany({});
  await prisma.role.deleteMany({});
}

async function main() {
  await clearDatabase();

  const superAdminRole = await prisma.role.create({
    data: {
      name: 'SUPER_ADMIN',
      description: 'Super Admin Role',
    },
  });

  const adminRole = await prisma.role.create({
    data: {
      name: 'ADMIN',
      description: 'Admin Role',
    },
  });

  const requestApproverRole = await prisma.role.create({
    data: {
      name: 'REQUEST_APPROVER',
      description: 'permite aprobar eventos y publicarlos',
    },
  });

  const marketingRole = await prisma.role.create({
    data: {
      name: 'MARKETING',
      description: 'permite trabajar en la informacion de eventos',
    },
  });

  // Create a user with roles
  const userWithSuperAdminRole = await prisma.user.create({
    data: {
      name: 'Alejandro',
      last_name: 'Montero',
      user_name: 'alm1',
      email: 'maa6000280@univalle.edu',
      password: '12345678',
      roles: {
        connect: [{ id: superAdminRole.id }],
      },
    },
  });

  const userWithAdminRole = await prisma.user.create({
    data: {
      name: 'Pablo',
      last_name: 'Arze',
      user_name: 'pablo123',
      email: 'pablo@univalle.edu',
      password: '12345678',
      roles: {
        connect: [{ id: adminRole.id }],
      },
    },
  });

  const userWithRequestApproverRole = await prisma.user.create({
    data: {
      name: 'Karen',
      last_name: 'Flores',
      user_name: 'Karen123',
      email: 'karen@univalle.edu',
      password: '12345678',
      roles: {
        connect: [{ id: requestApproverRole.id }],
      },
    },
  });

  const userWithMarketingRole = await prisma.user.create({
    data: {
      name: 'Rodrigo',
      last_name: 'Paz',
      user_name: 'rodri123',
      email: 'rod@univalle.edu',
      password: '12345678',
      roles: {
        connect: [{ id: marketingRole.id }],
      },
    },
  });

  const today = new Date();
  const startDateForRequestEvent = new Date(today);
  startDateForRequestEvent.setDate(today.getDate() + 1);

  const requestEvent1 = await prisma.requestEvent.create({
    data: {
      title: 'Test Event',
      subtitle: 'Subtitle for the event',
      description: 'Description for the event',
      startDate: startDateForRequestEvent,
      endDate: startDateForRequestEvent,
      locationName: 'Event Location',
      locationDetail: 'Location Details',
      address: 'Event Address',
      status: 'APPROVED',
      requestedBy: {
        connect: { id: userWithAdminRole.id },
      },
      approvedBy: {
        connect: { id: userWithRequestApproverRole.id },
      },
    },
  });

  const event1 = await prisma.event.create({
    data: {
      title: requestEvent1.title,
      subtitle: requestEvent1.subtitle,
      description: requestEvent1.subtitle,
      principalImage:
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dy-c4bv-mYJ9Uh9Gw3SLd1ZlTmjQcJBbcQ&usqp=CAU',
      images: [
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dy-c4bv-mYJ9Uh9Gw3SLd1ZlTmjQcJBbcQ&usqp=CAU',
        'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT5Dy-c4bv-mYJ9Uh9Gw3SLd1ZlTmjQcJBbcQ&usqp=CAU',
      ],
      tags: ['tag1', 'tag2'],
      startDate: requestEvent1.startDate,
      endDate: requestEvent1.endDate,
      locationName: requestEvent1.locationName,
      locationDetail: requestEvent1.locationDetail,
      address: requestEvent1.locationDetail,
      longitud: 123.45,
      latitud: 67.89,
      status: 'PUBLISH',
      publishedBy: {
        connect: { id: userWithRequestApproverRole.id },
      },
      requestEvent: {
        connect: { id: requestEvent1.id },
      },
    },
  });

  console.log('Seed data created successfully!');
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
