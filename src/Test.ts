import Queue from 'bull';

const math = new Queue('math');

math.process('add', async job => {
  console.log('Processing job...');
  return true;
  // throw new Error('Test error');
});

math.add('add', { num1: 1, num2: 2 });

math.on('completed', (job, result) => {
  console.log('Result:', result);
  console.log(job.name);
  job.remove();
});

math.on('failed', (job, err) => {
  console.log('name:', err.name, ' message:', err.message);
});
