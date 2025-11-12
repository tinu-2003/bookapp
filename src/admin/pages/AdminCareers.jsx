import AdminHeader from '../components/AdminHeader'
import AdminSidebar from '../components/AdminSidebar'
import AppFooter from '../../components/AppFooter'
import { Card, TabItem, Tabs, Textarea, TextInput } from "flowbite-react";
import { Table, TableBody, TableCell, TableHead, TableHeadCell, TableRow } from "flowbite-react";
import { Button, Modal, ModalBody, ModalFooter, ModalHeader } from "flowbite-react";
import { useState } from "react";

function AdminCareers() {
  const [openModal, setOpenModal] = useState(false);
  return (
    <>
      <AdminHeader />
      <div className='flex justify-start  w-full'>
        <div>
          {/* side bar */}
          <AdminSidebar />
        </div>

        {/* Books */}

        <div className='flex flex-col justify-center align-center w-full'>
          <h3 className='text-center font-bold italic text-4xl flex justify-center items-center text-white ' style={{ width: '100% ', backgroundImage:`url('https://i.pinimg.com/1200x/84/52/5c/84525c567ae78c8e0a1dbd31804065d1.jpg')`, height:'250px',
            backgroundPosition:'center',
            backgroundRepeat:'no-repeat',
            backgroundSize:'cover',
            // borderRadius:'50px'
            boxShadow:'4px 4px 8px black'
           }}>Careers</h3>

          <div className='mt-10 p-8 items-center justify-center flex  ' style={{ width: '100%' }}>
            <Tabs aria-label="Default tabs" variant="default" className='w-full'>
              <TabItem active title="Job Post" >
                {/* search and add button */}
                <div className='flex justify-between mt-5'>
                  <div className='flex'>
                    <TextInput placeholder='Search'></TextInput>
                    <Button>Search</Button>
                  </div>
                  <Button onClick={() => setOpenModal(true)}>Add Job+</Button>
                </div>
                {/* uploaded application */}
                <div className='mt-10'>
                  <Card className='mb-8'>
                    {/* jobtitle and apply button */}
                    <div className='flex'>
                      <p className='md:w-4/4'>
                        <h5>Job Title</h5>
                        <hr />
                      </p>
                      <Button className='ml-5 bg-red-700' onClick={() => setOpenModal(true)}>Delete</Button>
                    </div>
                    {/* description */}

                    <div>
                      <p>location :</p>
                      <p>Job Type :</p>
                      <p>Salary :</p>
                      <p>Qualification :</p>
                      <p>Experience :</p>
                      <p>Description :</p>
                    </div>
                  </Card>

                  <Card className='mb-8'>
                    {/* jobtitle and apply button */}
                    <div className='flex'>
                      <p className='md:w-4/4'>
                        <h5>Job Title</h5>
                        <hr />
                      </p>
                      <Button className='ml-5 bg-red-700' onClick={() => setOpenModal(true)}>Delete</Button>
                    </div>
                    {/* description */}

                    <div>
                      <p>location :</p>
                      <p>Job Type :</p>
                      <p>Salary :</p>
                      <p>Qualification :</p>
                      <p>Experience :</p>
                      <p>Description :</p>
                    </div>
                  </Card>


                  <Card className='mb-8'>
                    {/* jobtitle and apply button */}
                    <div className='flex'>
                      <p className='md:w-4/4'>
                        <h5>Job Title</h5>
                        <hr />
                      </p>
                      <Button className='ml-5 bg-red-700' onClick={() => setOpenModal(true)}>Delete</Button>
                    </div>
                    {/* description */}

                    <div>
                      <p>location :</p>
                      <p>Job Type :</p>
                      <p>Salary :</p>
                      <p>Qualification :</p>
                      <p>Experience :</p>
                      <p>Description :</p>
                    </div>
                  </Card>


                  <Card className='mb-8'>
                    {/* jobtitle and apply button */}
                    <div className='flex'>
                      <p className='md:w-4/4'>
                        <h5>Job Title</h5>
                        <hr />
                      </p>
                      <Button className='ml-5 bg-red-700' onClick={() => setOpenModal(true)}>Delete</Button>
                    </div>
                    {/* description */}

                    <div>
                      <p>location :</p>
                      <p>Job Type :</p>
                      <p>Salary :</p>
                      <p>Qualification :</p>
                      <p>Experience :</p>
                      <p>Description :</p>
                    </div>
                  </Card>


                  <Card className='mb-8'>
                    {/* jobtitle and apply button */}
                    <div className='flex'>
                      <p className='md:w-4/4'>
                        <h5>Job Title</h5>
                        <hr />
                      </p>
                      <Button className='ml-5 bg-red-700' onClick={() => setOpenModal(true)}>Delete</Button>
                    </div>
                    {/* description */}

                    <div>
                      <p>location :</p>
                      <p>Job Type :</p>
                      <p>Salary :</p>
                      <p>Qualification :</p>
                      <p>Experience :</p>
                      <p>Description :</p>
                    </div>
                  </Card>

                  <Card className='mb-8'>
                    {/* jobtitle and apply button */}
                    <div className='flex'>
                      <p className='md:w-4/4'>
                        <h5>Job Title</h5>
                        <hr />
                      </p>
                      <Button className='ml-5 bg-red-700' onClick={() => setOpenModal(true)}>Delete</Button>
                    </div>
                    {/* description */}

                    <div>
                      <p>location :</p>
                      <p>Job Type :</p>
                      <p>Salary :</p>
                      <p>Qualification :</p>
                      <p>Experience :</p>
                      <p>Description :</p>
                    </div>
                  </Card>

                  <Card className='mb-8'>
                    {/* jobtitle and apply button */}
                    <div className='flex'>
                      <p className='md:w-4/4'>
                        <h5>Job Title</h5>
                        <hr />
                      </p>
                      <Button className='ml-5 bg-red-700' onClick={() => setOpenModal(true)}>Delete</Button>
                    </div>
                    {/* description */}

                    <div>
                      <p>location :</p>
                      <p>Job Type :</p>
                      <p>Salary :</p>
                      <p>Qualification :</p>
                      <p>Experience :</p>
                      <p>Description :</p>
                    </div>
                  </Card>
                </div>
              </TabItem>
              <TabItem title="Users" >
                <div className="overflow-x-auto">
                  <Table>
                    <TableHead>
                      <TableRow>
                        <TableHeadCell>SL</TableHeadCell>
                        <TableHeadCell>Job Title</TableHeadCell>
                        <TableHeadCell>Qualification</TableHeadCell>
                        <TableHeadCell>Email</TableHeadCell>
                        <TableHeadCell>Phone</TableHeadCell>
                        <TableHeadCell>CoverLetter</TableHeadCell>
                        <TableHeadCell>Resume</TableHeadCell>
                      </TableRow>
                    </TableHead>
                    <TableBody className="divide-y">
                      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          1
                        </TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Bsc</TableCell>
                        <TableCell>Amal@gmail.com</TableCell>
                        <TableCell>654445446</TableCell>
                        <TableCell className=' leading-relaxed'>Loremoluptas expedita aat tempore eos cum veritatis voluptate?</TableCell>
                        <TableCell> resume</TableCell>
                      </TableRow>
                      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          2
                        </TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Bsc</TableCell>
                        <TableCell>Amal@gmail.com</TableCell>
                        <TableCell>654445446</TableCell>
                        <TableCell className=' leading-relaxed'>Loras ex repellat tempore eos cum veritatis voluptate?</TableCell>
                        <TableCell> resume</TableCell>
                      </TableRow>

                      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          3
                        </TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Bsc</TableCell>
                        <TableCell>Amal@gmail.com</TableCell>
                        <TableCell>654445446</TableCell>
                        <TableCell className=' leading-relaxed'>Loras ex repellat tempore eos cum veritatis voluptate?</TableCell>
                        <TableCell> resume</TableCell>
                      </TableRow>

                      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          4
                        </TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Bsc</TableCell>
                        <TableCell>Amal@gmail.com</TableCell>
                        <TableCell>654445446</TableCell>
                        <TableCell className=' leading-relaxed'>Loras ex repellat tempore eos cum veritatis voluptate?</TableCell>
                        <TableCell> resume</TableCell>
                      </TableRow>

                      <TableRow className="bg-white dark:border-gray-700 dark:bg-gray-800">
                        <TableCell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                          5
                        </TableCell>
                        <TableCell>Frontend Developer</TableCell>
                        <TableCell>Bsc</TableCell>
                        <TableCell>Amal@gmail.com</TableCell>
                        <TableCell>654445446</TableCell>
                        <TableCell className=' leading-relaxed'>Loras ex repellat tempore eos cum veritatis voluptate?</TableCell>
                        <TableCell> resume</TableCell>
                      </TableRow>

                    </TableBody>
                  </Table>
                </div>
              </TabItem>

            </Tabs>
          </div>
        </div>
      </div>

      {/* modal for add job */}

      <Modal show={openModal} onClose={() => setOpenModal(false)}>
        <ModalHeader>Application Form</ModalHeader>
        <ModalBody>
          <div>
            <TextInput className='mb-3' placeholder='Job-Title'></TextInput>
            <TextInput className='mb-3' placeholder='Location'></TextInput>
            <TextInput className='mb-3' placeholder='Job-Type'></TextInput>
            <TextInput className='mb-3' placeholder='Salary'></TextInput>
            <TextInput className='mb-3' placeholder='Qualification'></TextInput>
            <TextInput className='mb-3' placeholder='Experience'></TextInput>
            <Textarea className='mb-3'></Textarea>
          </div>
        </ModalBody>
        <ModalFooter>
          <Button >Add</Button>
          <Button color="alternative">
            Reset
          </Button>
        </ModalFooter>
      </Modal>

      <AppFooter />
    </>
  )
}

export default AdminCareers