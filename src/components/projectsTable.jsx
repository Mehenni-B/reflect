import React from 'react'
import {
  Flex,
  ButtonGroup,
  IconButton,
  Table,
  Thead,
  Tr,
  Th,
  Td,
  Tbody,
} from '@chakra-ui/react'
import { BsBoxArrowUpRight } from 'react-icons/bs'
import { Link } from 'react-router-dom'
import { DeleteProject } from '../components/modals/_index'
import {useProjects} from '../hooks/useProjects'

export default function ProjectsTable() {
    const header = ['project', 'actions']
    const { projects } = useProjects()
    const projectList = projects?.projects
    return (
      <Flex
        w="full"
        px={{ base: 4, sm: 6, md: 8, xl: 28 }}
        py="8"
        alignItems="center"
        justifyContent="center"
      >
        <Table
            w="full"
            bg="white"
            shadow="lg"
            display={{
              base: 'block',
              md: 'table',
            }}
            sx={{
              '@media print': {
                display: 'table',
              }
            }}
        >
          <Thead
            display={{
              base: 'none',
              md: 'table-header-group',
            }}
            sx={{
              '@media print': {
                display: 'table-header-group',
              },
            }}
          >
            <Tr>
              {header.map((x) => (
                <Th bg="gray.100" fontFamily="poppins" fontWeight="semibold" color="gray.800" fontSize="md" key={x}>{x}</Th>
              ))}
            </Tr>
          </Thead>
          <Tbody
            display={{
              base: 'block',
              lg: 'table-row-group',
            }}
            sx={{
              '@media print': {
                display: 'table-row-group',
              },
            }}
          >

            {
              projectList?.map(({name,id})=>{
                return(
                <React.Fragment key={id}>
                  <Tr>
                    <Td textTransform="uppercase" color="gray.900" fontWeight={"medium"}>
                      {name}
                    </Td>
                    <Td>
                      <ButtonGroup variant="solid" size="sm" spacing={3}>
                        <Link to={`/dashboard/${id}`}>
                          <IconButton
                            colorScheme="blue"
                            icon={<BsBoxArrowUpRight />}
                          />
                        </Link>
                        <DeleteProject id={id} name={name}/>
                      </ButtonGroup>
                    </Td>
                  </Tr>
                </React.Fragment> 
                )
              }) 
            }
          </Tbody>
        </Table>
      </Flex>
    )
}

/*

              {data.map((token, tid) => {
              return (
                <Tr
                  key={tid}
                  display={{
                    base: 'grid',
                    md: 'table-row',
                  }}
                  sx={{
                    '@media print': {
                      display: 'table-row',
                    },
                    gridTemplateColumns: 'minmax(0px, 35%) minmax(0px, 65%)',
                    gridGap: '10px',
                  }}
                >
                  {Object.keys(token).map((x) => {
                    return (
                      <React.Fragment key={`${tid}${x}`}>
                        <Td
                          display={{
                            base: 'table-cell',
                            md: 'none',
                          }}
                          sx={{
                            '@media print': {
                              display: 'none',
                            },
                            textTransform: 'uppercase',
                            color:"black",
                            fontWeight: 'bold',
                          }}
                        >
                          {x}
                        </Td>
                        <Td
                          color="gray.900"
                          fontSize="md"
                        >
                          {token[x]}
                        </Td>
                      </React.Fragment>
                    );
                  })}
                  <Td
                    display={{
                      base: 'table-cell',
                      md: 'none',
                    }}
                    sx={{
                      '@media print': {
                        display: 'none',
                      },
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                    }}
                  >
                    Actions
                  </Td>
                  <Td
                    display={{
                      base: 'table-cell',
                      md: 'block',
                    }}
                    sx={{
                      '@media print': {
                        display: 'none',
                      },
                      textTransform: 'uppercase',
                      fontWeight: 'bold',
                    }}
                  >
                    <ButtonGroup variant="solid" size="sm" spacing={3}>
                      <Link to="/dashboard/5">
                        <IconButton
                          colorScheme="blue"
                          icon={<BsBoxArrowUpRight />}
                        />
                      </Link>
                      <DeleteProject/>
                    </ButtonGroup>
                  </Td>
                </Tr>
              )
            })}

*/