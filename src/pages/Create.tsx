import {
  Box,
  Flex,
  Skeleton,
  Step,
  StepDescription,
  StepIcon,
  StepIndicator,
  StepNumber,
  StepSeparator,
  StepStatus,
  StepTitle,
  Stepper,
  useSteps,
} from "@chakra-ui/react";

const steps = [
  { title: "Details", description: "Product Details" },
  { title: "Images", description: "Images" },
  { title: "Prices", description: "Prices" },
];

export default function Create() {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });
  return (
    <Flex mt="20px" justify="center" direction="column">
      <Stepper index={activeStep} colorScheme="pinky">
        {steps.map((step, index) => (
          <Step key={index}>
            <StepIndicator>
              <StepStatus
                complete={<StepIcon />}
                incomplete={<StepNumber />}
                active={<StepNumber />}
              />
            </StepIndicator>

            <Box flexShrink="0">
              <StepTitle>{step.title}</StepTitle>
              <StepDescription>{step.description}</StepDescription>
            </Box>

            <StepSeparator />
          </Step>
        ))}
      </Stepper>
      <Skeleton minW="70vw" minH="60vh" />
    </Flex>
  );
}
