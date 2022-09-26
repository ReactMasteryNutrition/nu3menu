import {Box, Center, Flex, Heading, Text} from "@chakra-ui/react";
import React from "react";

const TermsTexts = () => {
    return (
        <>
            <Flex
                justifyContent="center"
                direction="column"
                alignItems="center"
                gap="3rem"
                margin="5rem 0 8rem 0"
            >
                <Center>
                    <Heading as="h1" size="xl" color={"green.50"}>Terms and conditions</Heading>
                </Center>
                <Center>
                    <Heading as={"h2"} size={"md"} color={"green.50"}>Last updated : 2022-09-25</Heading>
                </Center>
            </Flex>
            <Flex
                direction="column"
                justifyContent="center"
                alignItems="center"
                gap="3rem"

            >
                <Box>
                    <Heading as={"h2"} size={"md"} color={"#9faec0"} direction="column" marginBottom={3}>1. Introduction</Heading>
                    <Text color={"green.50"}>
                        These Website Standard Terms and Conditions written on this webpage shall manage your use of our website, Webiste Name accessible at Website.com.
                    </Text>
                    <Text color={"green.50"}>
                        These Terms will be applied fully and affect to your use of this Website. By using this Website, you agreed to accept all terms and conditions written in here. You must not use this Website if you disagree with any of these Website Standard Terms and Conditions.
                    </Text>
                    <Text color={"green.50"}>
                        Minors or people below 18 years old are not allowed to use this Website.
                    </Text>
                    <Heading as={"h2"} size={"md"} color={"#9faec0"} direction="column" marginBottom={3}>2. Intellectual Property Rights</Heading>
                    <Text color={"green.50"}>
                        Other than the content you own, under these Terms, Company Name and/or its licensors own all the intellectual property rights and materials contained in this Website.
                    </Text>
                    <Text color={"green.50"}>
                        You are granted limited license only for purposes of viewing the material contained on this Website.
                    </Text>
                    <Heading as={"h2"} size={"md"} color={"#9faec0"} direction="column" marginBottom={3}>3. Restrictions</Heading>
                    <Text color={"green.50"}>
                        You are specifically restricted from all of the following:
                    </Text>
                    <Text color={"green.50"}>
                        publishing any Website material in any other media;
                    </Text>
                    <Text color={"green.50"}>
                        selling, sublicensing and/or otherwise commercializing any Website material;
                    </Text>
                    <Text color={"green.50"}>
                        publicly performing and/or showing any Website material;
                    </Text>
                    <Text color={"green.50"}>
                        using this Website in any way that is or may be damaging to this Website;
                    </Text>
                    <Text color={"green.50"}>
                        using this Website in any way that impacts user access to this Website;
                    </Text>
                    <Text color={"green.50"}>
                        using this Website contrary to applicable laws and regulations, or in any way may cause harm to the Website, or to any person or business entity;
                    </Text>
                    <Text color={"green.50"}>
                        engaging in any data mining, data harvesting, data extracting or any other similar activity in relation to this Website;
                    </Text>
                    <Text color={"green.50"}>
                        using this Website to engage in any advertising or marketing.
                    </Text>
                    <Text color={"green.50"}>
                        Certain areas of this Website are restricted from being access by you and Company Name may further restrict access by you to any areas of this Website, at any time, in absolute discretion. Any user ID and password you may have for this Website are confidential and you must maintain confidentiality as well.
                    </Text>
                    <Heading as={"h2"} size={"md"} color={"#9faec0"} direction="column" marginBottom={3}>4. Your Content</Heading>
                    <Text color={"green.50"}>
                        In these Website Standard Terms and Conditions, “Your Content” shall mean any audio, video text, images or other material you choose to display on this Website. By displaying Your Content, you grant Company Name a non-exclusive, worldwide irrevocable, sub licensable license to use, reproduce, adapt, publish, translate and distribute it in any and all media.
                    </Text>
                    <Text color={"green.50"}>
                        Your Content must be your own and must not be invading any third-party’s rights. Company Name reserves the right to remove any of Your Content from this Website at any time without notice.
                    </Text>
                    <Heading as={"h2"} size={"md"} color={"#9faec0"} direction="column" marginBottom={3}>5. No warranties</Heading>
                    <Text color={"green.50"}>
                        This Website is provided “as is,” with all faults, and Company Name express no representations or warranties, of any kind related to this Website or the materials contained on this Website. Also, nothing contained on this Website shall be interpreted as advising you.
                    </Text>
                    <Heading as={"h2"} size={"md"} color={"#9faec0"} direction="column" marginBottom={3}>6. Limitation of liability</Heading>
                    <Text color={"green.50"}>
                        In no event shall Company Name, nor any of its officers, directors and employees, shall be held liable for anything arising out of or in any way connected with your use of this Website whether such liability is under contract. Company Name, including its officers, directors and employees shall not be held liable for any indirect, consequential or special liability arising out of or in any way related to your use of this Website.
                    </Text>
                </Box>
            </Flex>
        </>
    )
}

export default TermsTexts